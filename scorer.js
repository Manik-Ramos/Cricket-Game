"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
class Scorer {
    constructor() {
        this.ballCount = 0;
        this.overCount = 0;
        this.numberOfOvers = 0;
        this.totalBallsBowled = 0;
        this.totalWickets = 0;
        this.playerOnStrike = null;
        this.bowlerObject = null;
        this.listOfBatsman = [];
        this.listOfBowler = [];
        this.totalScore = 0;
        this.totalWickets = 0;
    }
    addBatsman(batsmanName) {
        this.listOfBatsman.push(batsmanName);
    }
    addBowler(bowlerName) {
        this.listOfBowler.push(bowlerName);
    }
    changeStrike() {
        if (this.playerOnStrike == this.listOfBatsman[0])
            this.playerOnStrike = this.listOfBatsman[1];
        else
            this.playerOnStrike = this.listOfBatsman[0];
    }
    changeBowler() {
        if (this.bowlerObject == this.listOfBowler[0])
            this.bowlerObject = this.listOfBowler[1];
        else
            this.bowlerObject = this.listOfBowler[0];
    }
    calculateScore(obj) {
        this.listOfBatsman.forEach(batsmanIndex => {
            if (batsmanIndex["name"] == obj.batsmanName)
                this.playerOnStrike = batsmanIndex;
        });
        this.listOfBowler.forEach(bowlerIndex => {
            if (bowlerIndex["name"] == obj.bowlerName)
                this.bowlerObject = bowlerIndex;
        });
        for (var key in obj) {
            if (key == "isExtra") {
                if (obj[key]) {
                    this.totalScore += obj.extraInfo.runsOffered;
                    this.bowlerObject.addRuns(obj.extraInfo.runsOffered);
                    this.bowlerObject.overRuns += obj.extraInfo.runsOffered;
                    if (obj.extraType == "byes" || obj.extraType == "legbyes")
                        this.ballCount++;
                    if (this.ballCount == 6) {
                        this.bowlerObject.numberOfOversBowled++;
                        this.ballCount = 0;
                        this.numberOfOvers++;
                    }
                }
            }
            else if (key == "isOut") {
                this.ballCount++;
                if (obj[key]) {
                    this.playerOnStrike.setBowlerName(obj.dismissalType, obj.dismissalInfo.fielderName, obj.bowlerName);
                    this.playerOnStrike.setDismissalype(obj.dismissalType);
                    if (this.playerOnStrike) {
                        this.playerOnStrike.changeIsOutStatus(true);
                        this.totalWickets++;
                        this.playerOnStrike.addRuns(obj["runsScored"]);
                        this.playerOnStrike.addNumberOfBallsFaced();
                        this.totalScore += obj["runsScored"];
                    }
                }
                else {
                    if (this.playerOnStrike) {
                        if (!this.playerOnStrike.isOut) {
                            this.playerOnStrike.addRuns(obj["runsScored"]);
                            this.playerOnStrike.addNumberOfBallsFaced();
                            this.totalScore += obj["runsScored"];
                        }
                    }
                }
                this.bowlerObject.overRuns += obj["runsScored"];
                this.bowlerObject.addRuns(obj["runsScored"]);
                this.bowlerObject.ballCount++;
                if (this.ballCount == 6) {
                    if (this.bowlerObject.overRuns == 0) {
                        this.bowlerObject.incrementMaidenOver();
                        this.bowlerObject.numberOfOversBowled++;
                        this.numberOfOvers++;
                        this.ballCount = 0;
                    }
                    else {
                        this.bowlerObject.numberOfOversBowled++;
                        this.ballCount = 0;
                        this.numberOfOvers++;
                        this.bowlerObject.overRuns = 0;
                    }
                }
            }
        }
    }
    calculateRunRate() {
        if (this.ballCount == 0) {
            return (this.totalScore / this.numberOfOvers);
        }
        else {
            let ballConversion = this.ballCount % 6 * 0.1666;
            let overConversion = this.numberOfOvers + ballConversion;
            return (this.totalScore / overConversion);
        }
    }
    printScore() {
        console.log(chalk.grey("\t\t\t#######################"));
        console.log(chalk.blue("\t\t\t* India  ") + chalk.white("Vs") + chalk.magenta("  England *"));
        console.log(chalk.grey("\t\t\t#######################"));
        console.log(chalk.yellowBright("Batting Scorecard"));
        console.log("-----------------------------------------------------------");
        console.log(chalk.cyanBright("Batsman\t\t\t\tRuns(Balls)   Strike Rate"));
        console.log(chalk.yellow("-----------------------------------------------------------"));
        this.listOfBatsman.forEach(batsman => {
            batsman.getStrikeRate();
            if (batsman.dismissalType == "Run Out")
                console.log(chalk.red(`${batsman.name}\t${batsman.dismissalType}\t(${batsman.fieldername})\t\t${batsman.runsScored}${"(" + batsman.numberOfBallsFaced + ")"}\t\t${(batsman.strikeRate * 100).toFixed(2)}`));
            else if (batsman.dismissalType == "Caught") {
                this.listOfBowler.forEach(bowlerIndex => {
                    if (bowlerIndex["name"] == batsman.bowlername) {
                        this.bowlerObject = bowlerIndex;
                        this.bowlerObject.numberOfWicketsTaken++;
                    }
                });
                console.log(chalk.red(`${batsman.name}\tc ${batsman.fieldername} b ${batsman.bowlername}\t${batsman.runsScored}(${batsman.numberOfBallsFaced})\t\t${(batsman.strikeRate * 100).toFixed(2)}`));
            }
            else if (batsman.dismissalType == "Bowled") {
                this.listOfBowler.forEach(bowlerIndex => {
                    if (bowlerIndex["name"] == batsman.bowlername) {
                        this.bowlerObject = bowlerIndex;
                        this.bowlerObject.numberOfWicketsTaken++;
                    }
                });
                console.log(chalk.red(`${batsman.name}\tb ${batsman.bowlername}\t${batsman.runsScored}(${batsman.numberOfBallsFaced})\t\t${(batsman.strikeRate * 100).toFixed(2)}`));
            }
            else if (batsman.dismissalType == "Lbw") {
                this.listOfBowler.forEach(bowlerIndex => {
                    if (bowlerIndex["name"] == batsman.bowlername) {
                        this.bowlerObject = bowlerIndex;
                        this.bowlerObject.numberOfWicketsTaken++;
                    }
                });
                console.log(chalk.red(`${batsman.name}\t${batsman.dismissalType}\t${batsman.bowlername}\t${batsman.runsScored}\t(${batsman.numberOfBallsFaced})\t\t${(batsman.strikeRate * 100).toFixed(2)}`));
            }
            else
                console.log(chalk.green(`${batsman.name}\t(Not Out)\t\t${batsman.runsScored}(${batsman.numberOfBallsFaced})\t\t${(batsman.strikeRate * 100).toFixed(2)}`));
        });
        console.log(chalk.grey("<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>"));
        console.log(chalk.magenta("Bowling Scorecard"));
        console.log("------------------------------------------------------------");
        console.log(chalk.blue("Bowler\t\t\tO\tM\tR\tW\tE"));
        console.log(chalk.yellow("------------------------------------------------------------"));
        this.listOfBowler.forEach(bowler => {
            bowler.getEconomy();
            console.log(chalk.cyan.italic(`${bowler.name}\t\t\t${bowler.getOversBowled()}\t${bowler.getMaidenOver()}\t${bowler.runsGiven}\t${bowler.getWicketsTaken()}\t${bowler.getEconomy()}`));
        });
        console.log(chalk.yellow("------------------------------------------------------------"));
        console.log(chalk.green.bold(`\t\tINDIA: ${this.totalScore}/${this.totalWickets}, Run Rate: ${this.calculateRunRate().toFixed(2)}`));
    }
}
exports.Scorer = Scorer;

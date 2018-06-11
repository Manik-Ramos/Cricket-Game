"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
class Batsman extends Player_1.Player {
    constructor(name) {
        super(name);
        this.fieldername = "";
        this.bowlername = "";
        this.dismissalType = "";
        this.runsScored = 0;
        this.numberOfBallsFaced = 0;
        this.strikeRate = 0;
        this.isOut = false;
    }
    getRunsScored() {
        return this.runsScored;
    }
    addRuns(run) {
        this.runsScored += run;
    }
    changeIsOutStatus(status) {
        this.isOut = status;
    }
    getStrikeRate() {
        this.strikeRate = ((this.runsScored) / (this.numberOfBallsFaced));
        return this.strikeRate;
    }
    addNumberOfBallsFaced() {
        this.numberOfBallsFaced += 1;
    }
    getOutDetails() {
        if (this.isOut) {
            if (this.dismissalType == "Caught" || this.dismissalType == "Bowled")
                return this.fieldername + " " + this.bowlername;
            else if (this.dismissalType == "Run Out")
                return this.fieldername;
        }
        else
            return "not out";
    }
    setDismissalype(dismissal) {
        this.dismissalType = dismissal;
    }
    getDismissalType() {
        return this.dismissalType;
    }
    setBowlerName(type, fielder, bowler) {
        if (type == "Caught" || type == "Bowled") {
            this.bowlername = bowler;
            this.fieldername = fielder;
        }
        else if (type == "Run Out")
            this.fieldername = fielder;
    }
}
exports.Batsman = Batsman;

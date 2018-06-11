import { Player } from "./Player";

export class Batsman extends Player {
    runsScored: number;
    numberOfBallsFaced: number;
    strikeRate: number;
    isOut: boolean;
    fieldername: string = "";
    bowlername: string = "";
    dismissalType: string = "";

    constructor(name: string) {
        super(name);
        this.runsScored = 0;
        this.numberOfBallsFaced = 0;
        this.strikeRate = 0;
        this.isOut = false;
    }

    getRunsScored(): number {
        return this.runsScored;
    }

    addRuns(run: number) {
        this.runsScored += run;
    }

    changeIsOutStatus(status: boolean) {
        this.isOut = status;
    }

    getStrikeRate(): number {
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

    setBowlerName(type, fielder, bowler?) {
        if (type == "Caught" || type == "Bowled") {
            this.bowlername = bowler;
            this.fieldername = fielder;
        }
        else if (type == "Run Out")
            this.fieldername = fielder;

    }
}


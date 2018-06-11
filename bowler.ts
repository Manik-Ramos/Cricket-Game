import { Player } from "./player";

export class Bowler extends Player {
    runsGiven: number;
    numberOfOversBowled: number;
    numberOfWicketsTaken: number;
    economy: number;
    ballCount: number;
    maidenOver: number;
    overRuns: number;

    constructor(name: string) {
        super(name);
        this.runsGiven = 0;
        this.overRuns = 0;
        this.ballCount = 0;
        this.numberOfOversBowled = 0;
        this.numberOfWicketsTaken = 0;
        this.economy = 0;
        this.maidenOver = 0;
    }

    getRunsGiven() : number{
        return this.runsGiven;
    }

    addRuns(run: number) {
        this.runsGiven += run;
    }

    getWicketsTaken() {
        return this.numberOfWicketsTaken;
    }

    addWicketsTaken() {
        this.numberOfWicketsTaken += 1;
        this.totalWickets += 1;
    }

    getEconomy() {
        let ballConversion = ((this.ballCount)%6) * 0.1666;
        let overConversion = this.numberOfOversBowled + ballConversion;
        this.economy = parseFloat((this.runsGiven/overConversion).toFixed(2));
        return this.economy;
    }

    getOversBowled() {
        return this.numberOfOversBowled;
    }
    
    addOversBowled() {
        this.numberOfOversBowled += 1;
    }

    setBallsBowled(numberOfBalls : number) {
        if(numberOfBalls == 6 ) {
            this.getOversBowled();
            this.ballCount = 0;
        }
        else
            this.ballCount = numberOfBalls;
    }

    incrementMaidenOver() {
        this.maidenOver += 1;
    }

    getMaidenOver() {
        return this.maidenOver;
    }
}


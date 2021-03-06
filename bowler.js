"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
class Bowler extends player_1.Player {
    constructor(name) {
        super(name);
        this.runsGiven = 0;
        this.overRuns = 0;
        this.ballCount = 0;
        this.numberOfOversBowled = 0;
        this.numberOfWicketsTaken = 0;
        this.economy = 0;
        this.maidenOver = 0;
    }
    getRunsGiven() {
        return this.runsGiven;
    }
    addRuns(run) {
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
        let ballConversion = ((this.ballCount) % 6) * 0.1666;
        let overConversion = this.numberOfOversBowled + ballConversion;
        this.economy = parseFloat((this.runsGiven / overConversion).toFixed(2));
        return this.economy;
    }
    getOversBowled() {
        return this.numberOfOversBowled;
    }
    addOversBowled() {
        this.numberOfOversBowled += 1;
    }
    setBallsBowled(numberOfBalls) {
        if (numberOfBalls == 6) {
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
exports.Bowler = Bowler;

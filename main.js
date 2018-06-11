"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bowler_1 = require("./bowler");
const scorer_1 = require("./scorer");
const batsman_1 = require("./batsman");
const score = new scorer_1.Scorer();
var data = [
    {
        runsScored: 1,
        isOut: true,
        dismissalType: 'Run Out',
        dismissalInfo: {
            fielderName: 'Root',
            hasBatsmanCrossed: true,
        },
        batsmanName: 'Rahul',
        bowlerName: 'Finn'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Finn'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Finn'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Finn'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Finn'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Finn'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Butcher',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Rohit',
        bowlerName: 'woakes'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'woakes'
    },
    {
        runsScored: 3,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'woakes'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'
    },
    {
        runsScored: 0,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'Finn'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Butcher',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Yuvraj',
        bowlerName: 'Finn'
    },
    {
        runsScored: 0,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Finn'
    },
    {
        runsScored: 0,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Finn'
    },
    {
        runsScored: 0,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Finn'
    },
    {
        runsScored: 0,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Finn'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Broad'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Broad'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Broad'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Broad'
    },
    {
        runsScored: 0,
        isOut: false,
        isExtra: true,
        extraType: 'byes',
        extraInfo: {
            runsOffered: 2
        },
        batsmanName: 'Dhoni',
        bowlerName: 'Broad'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Broad'
    },
];
var batsmanArray = [];
var bowlerArray = [];
var batsmanArrIndex = 0;
var bowlerArrIndex = 0;
data.forEach((obj) => {
    var bat = obj.batsmanName;
    var bowl = obj.bowlerName;
    if (batsmanArray.indexOf(bat) == -1) {
        batsmanArray.push(bat);
        var batsman = new batsman_1.Batsman(batsmanArray[batsmanArrIndex]);
        batsmanArrIndex++;
        score.addBatsman(batsman);
    }
    if (bowlerArray.indexOf(bowl) == -1) {
        bowlerArray.push(bowl);
        var bowler = new bowler_1.Bowler(bowlerArray[bowlerArrIndex]);
        bowlerArrIndex++;
        score.addBowler(bowler);
    }
    score.calculateScore(obj);
});
score.printScore();

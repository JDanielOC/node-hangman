var inquirer = require('inquirer');
var hangmanWords = require('./hangmanWords');
var fs = require('fs');


var lexicon = ["criminal", "justice", "heinous", "felonies", "detective", "investigate", "innocent",
        "guilty", "sentencing", "jury", "judge", "testify", "counselor", "testimony", "attorney", "inspector",
        "perp", "acquittal", "arraignment", "hearsay"
    ];

var guessesLeft = 9;
// use math.random to create random number giving you an index that relates to a random word in the lexicon
var gameWord = lexicon[Math.floor(Math.random() * lexicon.length)];
//log random word
console.log(gameWord);







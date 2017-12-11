// start game
// choose a random word and display a '_' for each letter contained in the random word.
// user chooses a letter and program compares the choice to the letters in the random word.
// if a letter matches the user choice, then the '_' for that letter is replaced by the actual letter.
// if the letter does not match then nothing changes; however the number of guesses left decriments by one.
// gameplay continues until guesses left zeroes out or the full word is guessed.

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
// log gameWord with '_' replacing gameWord letters.
console.log(this.gameWord.wordDisplay());


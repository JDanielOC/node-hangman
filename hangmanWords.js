var Letter = require('./hangmanLetters.js');
var game = require('./nodeHangman.js')

var Word = function (gameWord) {
    this.guessesLeft = 9;
    //create array utilizing split and map
    this.gameWord = gameWord.split().map(function (letterItem) {
        return new Letter(letterItem);
    });
    // lookup using new to call constructor function
    this.checkGuess = function (userGuess) {
        this.gameWord.forEach(function (item) {
            if (userGuess === item.letter) {
                item.letterGuessed = true;
            } else {
                this.guessesLeft--;
            }
        });
        //lookup forEach and loop through array of objects
    };
    this.displayChar = function () {
        this.gameWord.forEach(function (item) {
            if (item.letterGuessed = true) {

            } else {

            }
        });
        //lookup forEach and loop through array of objects
    };

};
module.exports = Word;
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
                //display letter instead of '_' and let player guess again. guessesLeft remains as-is.
            } else {
                //leave '_' in place and guessesLeft decriments in the checkGuess function above.
            }
        });
    };
};
module.exports = Word;
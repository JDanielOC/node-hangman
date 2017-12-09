var Letter = require('./hangmanLetters.js');

var Word = function (gameWord) {
    //create array utilizing split and map
    this.gameWord = gameWord.split().map(function (letterItem) { return new Letter(letterItem); });
        // lookup using new to call constructor function
        // object.value    object
    this.checkGuess = function(userGuess) {
        this.gameWord.forEach(Word(2)
        
        
         //lookup forEach and loop through array of objects
        )};
    




}

module.exports = Word;
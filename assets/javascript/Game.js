var empty =["_", "_", "_", "_", "_","_"];
var word = ["C", "H", "U", "C", "K","Y"];
var wins = 0;
var guessRemain = 15;
var userGuessText = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var letGuessed = event.key;
   
    var letters_guessed = document.getElementById("letters_already guessed");
    var userChoiceText = document.getElementById("userchoice_text");
    userGuess = userGuess.toUpperCase();
   
    for (i = 0; i< 16; i++)
    if (word.includes(userGuess)) {
        empty[word.indexOf(userGuess)] = userGuess
    }
   
    if (guessRemain > 0) {
        (guessRemain = (guessRemain - 1))
        userGuessText = letGuessed + "," + userGuessText;
   }
   if (empty.includes('_') !== true) {
       wins = wins + 1;
       document.getElementById("myImage").src ="././assets/images/Horror3.jpg";
       guessRemain = 15;
       userGuessText = "";
       chucky();
   }
   else if (guessRemain <= 0) {
       document.getElementById("body").style.display = "none";
      
       document.getElementById("h1") = "Game Over"
   }

document.onkeyup = function (event) {

 var userGuess = event.key;
 var letGuessed = event.key;

 var letters_guessed = document.getElementById("letters_already guessed");
 var userChoiceText = document.getElementById("userchoice_text");
 userGuess = userGuess.toUpperCase();

 for (i = 0; i< 16; i++)
 if (word.includes(userGuess)) {
     empty[word.indexOf(userGuess)] = userGuess
 }

 if (guessRemain > 0) {
     (guessRemain = (guessRemain - 1))
     userGuessText = letGuessed + "," + userGuessText;
}
if (empty.includes('_') !== true) {
    wins = wins + 1;
    document.getElementById("myImage").src ="././assets/images/Horror4.jpg";
    guessRemain = 15;
    userGuessText = "";
    freddy();
}
else if (guessRemain <= 0) {
    document.getElementById("body").style.display = "none";
   
    document.getElementById("h1") = "Game Over"
}

userChoiceText.textContent = empty;
guesses_remaining.textContent = guessRemain;
winsText.textContent = wins;
letters_guessed.textContent = userGuessText;

function freddy() {
empty = var empty =["_", "_", "_", "_", "_","_"];
var word = ["F", "R", "E", "D", "D","Y"];
var wins = 0;
var guessRemain = 15;
var userGuessText = [];
}
document.onkeyup = function (event) {

    var userGuess = event.key;
    var letGuessed = event.key;
   
    var letters_guessed = document.getElementById("letters_already guessed");
    var userChoiceText = document.getElementById("userchoice_text");
    userGuess = userGuess.toUpperCase();
   
    for (i = 0; i< 16; i++)
    if (word.includes(userGuess)) {
        empty[word.indexOf(userGuess)] = userGuess
    }
   
    if (guessRemain > 0) {
        (guessRemain = (guessRemain - 1))
        userGuessText = letGuessed + "," + userGuessText;
   }
   if (empty.includes('_') !== true) {
       wins = wins + 1;
       document.getElementById("myImage").src ="././assets/images/Horror5.jpg";
       guessRemain = 15;
       userGuessText = "";
       jason();
       else if (guessRemain <= 0) {
        document.getElementById("body").style.display = "none";
       
        document.getElementById("h1") = "Game Over"
    }
function jason() {
empty = var empty =["_", "_", "_", "_", "_",];
var word = ["J", "A", "S", "O", "N",];
var wins = 0;
var guessRemain = 15;
var userGuessText = [];
}
document.onkeyup = function (event) {

    var userGuess = event.key;
    var letGuessed = event.key;
   
    var letters_guessed = document.getElementById("letters_already guessed");
    var userChoiceText = document.getElementById("userchoice_text");
    userGuess = userGuess.toUpperCase();
   
    for (i = 0; i< 16; i++)
    if (word.includes(userGuess)) {
        empty[word.indexOf(userGuess)] = userGuess
    }
   
    if (guessRemain > 0) {
        (guessRemain = (guessRemain - 1))
        userGuessText = letGuessed + "," + userGuessText;
   }
   if (empty.includes('_') !== true) {
       wins = wins + 1;
       document.getElementById("myImage").src ="././assets/images/Horror6.jpg";
       guessRemain = 15;
       userGuessText = "";
       michael();
       else if (guessRemain <= 0) {
        document.getElementById("body").style.display = "none";
       
        document.getElementById("h1") = "Game Over"
    }
function michael() {
empty = var empty =["_", "_", "_", "_", "_",];
var word = ["M", "I", "C", "H", "A","E","L"];
var wins = 0;
var guessRemain = 15;
var userGuessText = [];
}
userChoiceText.textContent = empty;
guesses_remaining.textContent = guessRem;
winsText.textContent = wins;
letters_guessed.textContent = userGuessText;

}
}
}

}
}
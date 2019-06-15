var empty =["_", "_", "_", "_", "_",];
var word = ["J", "A", "S", "O", "N",];
var wins = 0;
var guessRemain = 15;
var userGuessText = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var letGuessed = event.key;
   
    var letters_guessed = document.getElementById("letters_already guessed");
    var userChoiceText = document.getElementById("userchoice_text");
    userGuess = userGuess.toUpperCase();
   
    for (i = 0; i < 16; i++)
    if (word.includes(userGuess)) {
        empty[word.indexOf(userGuess)] = userGuess
    }

if (userGuessText.includes(letGuessed)) {
        guessRemain = guessRemain;
        userGuessText = userGuessText;
      
 }
 
 if ((guessRemain > 0) && (userGuessText.includes(letGuessed) != true)) {
    (guessRemain = (guessRemain - 1))
    userGuessText.push(letGuessed);
    console.log(userGuessText)
  }

  if (empty.includes("_") !== true) {
       wins = wins + 1;
       document.getElementById("myImage").src ="././assets/images/Horror3.jpg";
       guessRemain = 15;
       userGuessText = "";
       chucky();
   }
   
   else if (guessRemain <= 0) {
    alert('Movie Over')
   }
  
   userChoiceText.textContent = empty;
   guesses_remaining.textContent = guessRemain;
   winsText.textContent = wins;
   letters_guessed.textContent = userGuessText;

   function chucky(){
   empty =["_", "_", "_", "_", "_","_"];
   var word = ["C", "H", "U", "C", "K","Y"];
   var guessRemain = 15;
   var userGuessText = [];

   }
  
   document.onkeyup = function (event) {
    var userGuess = event.key;
    var letGuessed = event.key;

    var letters_guessed = document.getElementById("letters_alreadyguessed");
    var userChoiceText = document.getElementById("userchoice_text");
    userGuess = userGuess.toUpperCase();

    for (i = 0; i < 16; i++)
      if (word.includes(userGuess)) {
        empty[word.indexOf(userGuess)] = userGuess
      }

      if (userGuessText.includes(userGuess)) {
        guessRemain = guessRemain
        userGuessText = userGuessText
        console.log(guessRemain)
        console.log(userGuess)
        console.log(userGuessText)
      }

    if ((guessRemain > 0) && (userGuessText.includes(letGuessed) != true)) {
      (guessRemain = (guessRemain - 1))
      userGuessText.push(letGuessed)
      
    }

    if (empty.includes("_") !== true) {
        wins = wins + 1;
        document.getElementById("myImage").src ="././assets/images/Horror4.jpg";
        guessRemain = 15;
        userGuessText = "";
        freddy();
    }
    else if (guessRemain <= 0) {
        alert("game over")
    }

    userChoiceText.textContent = empty;
   guesses_remaining.textContent = guessRemain;
   winsText.textContent = wins;
   letters_guessed.textContent = userGuessText;
}

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

 var letters_guessed = document.getElementById("letters_alreadyguessed");
 var userChoiceText = document.getElementById("userchoice_text");
 userGuess = userGuess.toUpperCase();

for (i = 0; i< 16; i++)
 if (word.includes(userGuess)) {
     empty[word.indexOf(userGuess)] = userGuess
 }

 
 
 
 if ((guessRemain > 0) && (userGuessText.includes(letGuessed)) !=true)){
     (guessRemain = (guessRemain - 1))
     userGuessText.push(letGuessed);
 }


if (empty.includes("_") !== true) {
    wins = wins + 1;
    document.getElementById("myImage").src ="././assets/images/Horror4.jpg";
    guessRemain = 15;
    userGuessText = "";
    freddy();
}
else if (guessRemain <= 0) {
    alert("Game Over")
}

userChoiceText.textContent = empty;
guesses_remaining.textContent = guessRemain;
winsText.textContent = wins;
letters_guessed.textContent = userGuessText;

function freddy() {
empty =["_", "_", "_", "_", "_", "_"];
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
   
if (guessRemain > 0) && (userGuessText.includes(letGuessed)) != true)) {
 (guessRemain = (guessRemain - 1))
    userGuessText.push(letGuessed)
}
if (empty.includes("_") !== true){
    wins = wins + 1;
    userGuessText = "";

}
else if (guessRemain <= 0){
    alert ("Survived")
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
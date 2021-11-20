var level = 1;
var gameOngoing = true;
var lives = 5;
var firstGuess = true;
function game() {
    while (gameOngoing) {
        //this doesnt work because i'm doing something stupid probably
        document.getElementById("heading").innerHTML = "Level " + level;
        document.getElementById("paragraph").innerHTML = lives + " Lives";

        if (firstGuess) {
            //number generator
            answer = Math.floor(Math.random() * (level)) + 1
            //All the info that would be shown around the page is all in this prompt
            guess = prompt("INPUT GUESS, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
        } else { 
            if (guess > answer) {
                guess = prompt("INPUT A LOWER NUMBER, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
            } else {
                guess = prompt("INPUT A HIGHER NUMBER, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
            }
        }
        if (guess == answer) {
            alert("CORRECT!");
            firstGuess = true;
            if (lives < 5) {
                if (lives == 4) {
                    //Lives cap at 5 so if you have 4 lives you don't go up to 6 (having only one extra life per number guessed right felt too low)
                    lives = 5;
                } else {
                    lives += 2;
                }
            }
            level++;
        } else {
            firstGuess = false;
            //This alert could probably be replaced or removed
            alert("INCORRECT");
            lives--;
        }
        if (lives <= 0) {
            gameOngoing = false;
        }
    }
}
alert("YOU LOST. SCORE = " + level);


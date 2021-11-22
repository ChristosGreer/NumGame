var level;
var lives;
var answer;
var score1 = 0, score2 = 0, score3 = 0;

function start() {
    level = 1;
    lives = 5;
    game();
}


function game() {

    answer = Math.floor(Math.random() * (level)) + 1
    document.getElementById("question").innerHTML = "INPUT GUESS, RANGE = 1 - " + (level + 1) + ", LIVES: " + lives;
    document.getElementById("heading").innerHTML = "NumGame, Level " + level;

}


function submit() {

    if (lives > 0) {

        var guess = parseInt(document.getElementById("num1").value);
        
        if (guess != answer) {
            lives--;
            //Need a delay for this to show properly (like 0.5 seconds)
            //document.getElementById("question").innerHTML = "INCORRECT!";
        }

        if (guess > answer) {
            document.getElementById("question").innerHTML = "INPUT A LOWER NUMBER, RANGE = 1 - " + (level + 1) + ", LIVES: " + lives;
        } else if (guess < answer) {
            document.getElementById("question").innerHTML = "INPUT A HIGHER NUMBER, RANGE = 1 - " + (level + 1) + ", LIVES: " + lives;
        }

        if (guess == answer) {
            //Need a delay for this to show properly (like 0.5 seconds)
            //document.getElementById("question").innerHTML = "CORRECT!";
            if (lives < 5) {
                if (lives == 4) {
                    lives = 5;
                } else {
                    lives += 2;
                }
            }
            level++;
            game();
        }

        if (lives <= 0) {
            gameOver();
        }

    }

}


function gameOver() {
    document.getElementById("heading").innerHTML = "YOU LOST. SCORE = " + level;
    document.getElementById("question").innerHTML = "YOU LOST. SCORE = " + level + ". PRESS \"CLICK TO START\" TO START AGAIN.";
    if (level > score1) {
        score3 = score2;
        score2 = score1;
        score1 = level;
    } else if (level > score2) {
        score3 = score2;
        score2 = level;
    } else if (level > score3) {
        score3 = level;
    }
    document.getElementById("score1").innerHTML = "1st Place Score: " + score1 + " Levels";
    document.getElementById("score2").innerHTML = "2nd Place Score: " + score2 + " Levels";
    document.getElementById("score3").innerHTML = "3rd Place Score: " + score3 + " Levels";
}
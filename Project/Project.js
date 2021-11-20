var level = 1;
var gameOngoing = true;
var lives = 5;
var firstGuess = true;

function game() {

   
    var p = document.getElementById("mydata");


    while (gameOngoing) {
        //this doesnt work because i'm doing something stupid probably
        document.getElementById("heading").innerHTML = "Level " + level  + " ---> " + lives + " Lives";
   

        output();
        

        if (firstGuess) {
            //number generator
            //answer = Math.floor(Math.random() * (level)) + 1
            //All the info that would be shown around the page is all in this prompt
            //p.innerHTML = ("INPUT GUESS, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
            //guess = parseInt(document.getElementById("num1").value);
            //guess = prompt ("What is your guess: ")
        } else { 
            if (guess > answer) {

               //output(answer);
                //p.innerHTML= ("INPUT A LOWER NUMBER, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
                //guess = prompt("What is your guess: ");

            } else {
               //output(answer);
                //p.innerHTML = ("INPUT A HIGHER NUMBER, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
                //guess = prompt("What is your guess: ");
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
    }
}

function output (){

   answer = Math.floor(Math.random() * (level)) + 1

   if (firstGuess) {
      p.innerHTML = ("INPUT GUESS, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
      guess = parseInt(document.getElementById("num1").value);

      //guess = prompt ("What is your guess: ")

  } else { 
      if (guess > answer) {
          p.innerHTML= ("INPUT A LOWER NUMBER, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
          //guess = prompt("What is your guess: ");

      } else {
          p.innerHTML = ("INPUT A HIGHER NUMBER, LEVEL" + level + ", RANGE = 1 - " + (level + 1) + ", LIVES: " + lives);
          //guess = prompt("What is your guess: ");
      }
  }

}
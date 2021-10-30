# NumGame
Team Name: NumGame
Members: 
Christos Greer (cg03@my.yorku.ca, Section A / Lab 1)
Dayeon Lee (day010@my.yorku.ca, Section A / Lab 1)



Project Name: “The Guessing Game”
Summary: 
The server generates a number between 1 and 2  and asks the user to guess which number is generated within a set time. If the user gets it right, then the server adds 1 to their score and they move on to the next level. 

Every level up increases the range of numbers generated by 1 (Ex. Level 2 will generate numbers between 1 and 3) and reduce the amount of time given.

This goes on until the user guesses the number wrong. Their score is displayed, and they are told if they set a new record or not. The record is displayed on-screen while the game is being played and only changes when a new record is set.

Functional Requirements:

 Main Menu:
 
    -Music is played when the site is opened and during the game, and is mutable on the main menu

    -A main menu is displayed with the options to start the game or to view how to play

    -When clicking on how to play, the page changes to show the rules and an option to return back to the main menu

During the game:

    -Once the game is started, the user will be taken to a screen showing the level and the range of numbers they will have to guess in
 
    -The level screen displays how many lives the user has
 
    -A random number generator where the range of numbers is able to change (increasing with the level) will be used to generate a number that the user has to guess

    -An input box will be in the center of the screen for the user to input their guess

If the user guesses the number:

    -They are shown the next level and the page display changes slightly to show the new level number
    
    -They are shown the new number range above the input box
    
    -They are sometimes given an extra life if they are below the max number of lives

If the user fails to guess the number:

    -They lose a life and are told if the number is higher or lower and then to guess again

If the user runs out of lives:

    -They are taken to a "game over" screen which displays some statistics
    
    -The level they made it to is displayed as their score
    
    -Their score is displayed next to their previous score and highest score
    
    -They are told if they got a new record and if it is a new record it will also appear in the highest score spot
    
    -They are given the option to return to the main menu

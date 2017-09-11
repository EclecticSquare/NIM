var dotsBoard = 16;
var numberOfDots = parseInt(prompt("How many do you wish to remove? Choose 1, 2 or 3."));

//I need a function that gets player input. How many dots do they want to remove.
function playerChoice() {
  //var numberOfDots = parseInt(prompt("How many do you wish to remove? Choose 1, 2 or 3."));
  console.log(numberOfDots);
}
 playerChoice();

// I need a function that switches players turns
var playerOne = true; //Player two is false.
function turnTracker() {
  if(playerOne){
    console.log("Go player one.")
  } else {
    console.log("Go player two")
  }
  dotsRemaining();
  playerOne = !playerOne;
}


//I need a function that removes the number of dots given by the player.

function removeDots(number) {
  while (dotsStillOnBoard > 0) {
    dotsStillOnBoard - playerChoice;
  }
}


// I need to return the new number of dots after each player takes a turn.
//Also return an error if player puts in a number of dots that can not be removed.
 function dotsRemaining() {
   var dotsStillOnBoard = dotsBoard - numberOfDots;
   console.log(dotsStillOnBoard);
 }
dotsRemaining();
 //I need to check if there is a winner

 function didSomeoneWin() {

 }

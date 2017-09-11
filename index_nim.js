


var playerChoice = 2    // parseint(prompt("How many dots do you want to remove? No more than 3."));


function removeDots(num) {
  var numberOfDots = 16;
  console.log(numberOfDots);
  if (numberOfDots > 0) {
    var numberOfDots = numberOfDots - playerChoice;
    console.log(numberOfDots);
  }
 //var numberOfDots = numberOfDots - playerChoice;
 //console.log(numberOfDots);
}

removeDots(playerChoice);

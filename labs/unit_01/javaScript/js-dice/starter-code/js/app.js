//3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

document.getElementById('roll-dice').onclick = diceRoll;
//generate a random number between 1-6 and store to a var, random1
function diceRoll () {
var random1 = Math.floor((Math.random() * 6) + 1);

//generate a random number between 1-6 and store to a var, random2

var random2 = Math.floor((Math.random() * 6) + 1);

//combine 'dice-' and random1 to form the random class for the first die, firstDie

var firstDie = 'dice-' + random1;

//combine 'dice-' and random2 to form the random class for the second die, secondDie

var secondDie = 'dice-' + random2;

//get the first die by ID and update the class to firstDie (hint: document.getElementById)

document.getElementById('first-die').className = firstDie;

//get the first die by ID and update the class to secondDie (hitn:document.getElementById)
document.getElementById('second-die').className = secondDie;
}


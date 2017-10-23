//create secretNumber
var secretNumber = 7;
//ask user for guess
var guess = Number(prompt("Guess a number"));
//check guess

if (guess === secretNumber) {
	alert("You have guessed the correct number!");
} else if (guess < secretNumber) {
	alert("Your guess too low. Guess again!");
} else {
	alert("Your guess is too high. Guess again!");
}
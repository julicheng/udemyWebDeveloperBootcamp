var problemOne = -10;
while (problemOne <= 19) {
	console.log(problemOne);
	problemOne++;
} 

var problemTwo = 10;
while (problemTwo <=40 ) {
	console.log(problemTwo);
	problemTwo+=2;
}

var problemThree = 300;
while (problemThree <= 333) {
	if (problemThree % 2 !== 0) {
		console.log(problemThree);
	}
	problemThree++;
}

var problemFour = 5;
while (problemFour <= 50) {
	if ((problemFour % 5 === 0) && (problemFour % 3 === 0)) {
		console.log(problemFour);
	}
	problemFour++;
}
var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector('input');
var playingToDisplay = document.querySelector('p span');

p1button.addEventListener('click', function() {
	if (!gameOver) {
		p1score++;
		if (p1score === winningScore) {
			gameOver = true;
			p1display.classList.add("winner");
			console.log("YOU HAVE WON!");
		}
	}
	p1display.textContent = p1score;
});

p2button.addEventListener('click', function() {
	if (!gameOver) {
	p2score++;
	if (p2score === winningScore) {
		gameOver = true;
		p2display.classList.add("winner");
		console.log("YOU HAVE WON!");
		}
	}
	p2display.textContent = p2score;
});

function reset() {
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener('click', function() {
	reset();
})

numInput.addEventListener('change', function() {
	playingToDisplay.textContent = Number(numInput.value);
	winningScore = Number(numInput.value);
	reset();
});
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setupMode();
	setupSquares();
	reset();
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add event listener when clicked
		squares[i].addEventListener('click', function() {
			//grab color of clicked square and compare to pickedColor
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				//fade out if incorrect
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

}

function setupMode() {
	//mode button listeners
		for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener('click', function() {
				modeButtons[0].classList.remove('selected');
				modeButtons[1].classList.remove('selected');
				this.classList.add('selected');

				this.textContent === "Easy" ? numSquares = 3: numSquares =6;
				//alternate way of writing the if statement (ternary)
				// if (this.textContent === "Easy") {
				// 	numSquares = 3;
				// } else {
				// 	numSquares = 6;
				// }
				reset();
			})
		}
}

function reset() {
	//change text content of button
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	//generate all new colors
	colors = generateRandomColors(numSquares)
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener('click', function() {
	reset();
})



function changeColors(color) {
	//loop through all squares
	//change each color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

//pick a random color from array
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//add random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +  ")";
};
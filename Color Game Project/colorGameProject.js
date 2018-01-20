//for colors that are not random
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easyButton');
var hardButton = document.querySelector('#hardButton');

easyButton.addEventListener('click', function() {
	easyButton.classList.toggle('selected');
	hardButton.classList.toggle('selected');
	numSquares = 3;
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#232323"
})

hardButton.addEventListener('click', function() {
	easyButton.classList.toggle('selected');
	hardButton.classList.toggle('selected');
	numSquares = 6;
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];

			squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "#232323"
})

resetButton.addEventListener('click', function() {
	//change text content of button
	resetButton.textContent = "New Colors"
	//generate all new colors
	colors = generateRandomColors(numSquares)
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323"
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
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
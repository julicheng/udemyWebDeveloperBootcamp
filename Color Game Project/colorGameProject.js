//for colors that are not random
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];

var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickedColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');

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
function pickedColor() {
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
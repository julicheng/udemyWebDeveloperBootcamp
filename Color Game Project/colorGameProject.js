var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll('.square');
var pickedColor = pickedColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');

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
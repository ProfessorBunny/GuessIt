/*PLease See color Game project Part 8 for formatting the code in different way

*/

var numSquares = 6;
var colors = colorGenerator(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyButton = document.getElementById('easy');
var hardButton = document.querySelector('#hard');

easyButton.addEventListener('click', function() {
	hardButton.classList.remove('selected');
	easyButton.classList.add('selected');
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	//generate 3 new random colors
	numSquares = 3;
	colors = colorGenerator(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match the new color
	colorDisplay.textContent = pickedColor;
	//we have 6 square divs
	// in easy mode we only need to 3
	// so we are going to hide the other 3, (we will hide bottom 3)
	for (var i = 3; i < squares.length; i++) {
		// set dispaly to none
		squares[i].style.display = 'none';
	}
	//now set new colors to remaining 3 squares
	for (var i = 0; i < 3; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
});

hardButton.addEventListener('click', function() {
	hardButton.classList.add('selected');
	easyButton.classList.remove('selected');
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	//generate 6 new random colors
	numSquares = 6;
	colors = colorGenerator(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match the new color
	colorDisplay.textContent = pickedColor;
	//we have 6 square divs
	// in easy mode we hide bottom 3 of those 6 divs
	// so we are going to display those 3 divs again for hard mode
	for (var i = 3; i < squares.length; i++) {
		// set dispaly to block
		squares[i].style.display = 'block';
	}
	//now set new colors to remaining 3 squares
	for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
});

resetButton.addEventListener('click', function() {
	resetButton.textContent = 'New Colors';
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';

	//generate new random colors
	colors = colorGenerator(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match the new color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for (var i = 0; i < squares.length; i++) {
		// add new colors from colors-array to squares
		squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct';
			changeColor(pickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = 'Play Again';
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColor(color) {
	//loop through all sqaures
	for (i = 0; i < squares.length; i++) {
		//change each color to correct color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorGenerator(num) {
	//make an array
	colorsGenerated = [];
	//repeat num time
	for (i = 0; i < num; i++) {
		// get random color and push into array
		colorsGenerated.push(randomColor());
	}

	//return array
	return colorsGenerated;
}

function randomColor() {
	// rgb has a number between 0 & 255, so multiply Math.random with 256
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	//putting together rgb color format
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

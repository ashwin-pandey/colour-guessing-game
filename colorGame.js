var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setUpModeButtons();
	//squares listeners
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) { 
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			
			reset();
		});
	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
		//add click listeners to the square
		squares[i].addEventListener("click", function() {
			//grab the color of clicked square
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "PLAY AGAIN?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of the squares on the page
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "NEW COLORS";
	h1.style.backgroundColor = "steelblue";
}

/*easyBtn.addEventListener("click", function() {
	//Easy button selected
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//generate new colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the corresponding h1
	colorDisplay.textContent = pickedColor;
	//change colors of the squares on the page and divisions from 6 to 3
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	//Hard button selected
	hardBtn.classList.add("selected");
	//remove selected from easy
	easyBtn.classList.remove("selected");
	//generate new colors
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change the corresponding h1
	colorDisplay.textContent = pickedColor;
	//change colors of the squares on the page and divisions from 3 to 6
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});*/

resetButton.addEventListener("click", function() {
	reset();
	/*
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of the squares on the page
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "NEW COLORS";
	h1.style.backgroundColor = "steelblue";
	*/
});

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random colors and push into array
		arr.push(randomColors());
	}
	//return array
	return arr;
}

function randomColors() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
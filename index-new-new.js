var activeColor = ["blanc", "blanc"];
var activeTile = 0;
var activeTileColor = ["blanc", "blanc"];

function activeColorUnshiftPop(color) {
	activeColor.unshift(color);
	activeColor.pop();
}

function activeTileEquals(letter) {
	
	switch (letter) {
		case "a":
			activeTile = 0;
		break;
		
		case "b":
			activeTile = 1;
		break;
		
		case "c":
			activeTile = 2;
		break;
		
		case "d":
			activeTile = 3;
		break;
		
		case "e":
			activeTile = 4;
		break;
		
		case "f":
			activeTile = 5;
		break;
		
		case "g":
			activeTile = 6;
		break;
		
		case "h":
			activeTile = 7;
		break;
	}
}

function activeTileColorUnshiftPop(color) {
	activeTileColor.unshift(color);
	activeTileColor.pop();
}

var activeTileAndColor = {
    colorUpTile: function() {
		
		if (activeTileColor[0] !== activeTileColor[1]) {
			document.querySelectorAll(".tile")[this.tile].classList.add(this.color);
			document.querySelectorAll(".tile")[this.tile].classList.remove(this.previous);
			document.querySelectorAll(".tile")[this.tile].classList.add(this.color);
		} else if (activeTileColor[0] === activeTileColor[1]) {
			document.querySelectorAll(".tile")[this.tile].classList.add(this.color);
			document.querySelectorAll(".tile")[this.tile].classList.remove(activeColor[1]);
		}
		
    }
}

var now = Object.create(activeTileAndColor);

function ActiveTileColorNow(tile, color, previous) {
	this.tile = tile;
	this.color = color;
	this.previous = previous;
}

for(var i=0; i<10; i++) {
	document.querySelectorAll(".color")[i].addEventListener("click", function() {
		activeColorUnshiftPop(this.innerHTML);
		document.querySelector(".active-tile").classList.add(activeColor[0]);
		document.querySelector(".active-tile").classList.remove(activeColor[1]);
	});
}

for(var i=0; i<8; i++) {
	document.querySelectorAll(".tile")[i].addEventListener("click", function() {
		activeTileEquals(this.innerHTML);
		activeTileColorUnshiftPop(activeColor[0])
		now.tile = activeTile;
		now.color = activeTileColor[0];
		now.previous = activeTileColor[1];
		now.colorUpTile();	
	});
}




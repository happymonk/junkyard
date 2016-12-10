var chessboard = new Chessboard;

// display current chessboard state in HTML
function displayChessboard() {
  document.body.innerHTML = "";
  chessboard.forEach(function(e){
                       document.body.innerHTML += e.join("&nbsp;&nbsp;&nbsp;") + "<br>"
                     });
}

// chessboard data structure as array of arrays
// alternative is array[64] with address = (row * 8) + col
// empty squares are '0', occupied squares non-zero
function Chessboard() {
	return [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]];
}


function isLegalMove(piece) {
	//return true if move is legal
}

function isOccupied(square) {
	// return true if square !== 0
	return (square !== 0);
}


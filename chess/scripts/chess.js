var chessboard = new Chessboard;
var pieces = {pawn:1,knight:2,bishop:3,rook:4,queen:5,king:6}

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

function placePiece(piece, row, column) {
	if(piece == undefined || row == undefined || column == undefined) {
		return "Error: missing one or more paramaters";
	}
	chessboard[row][column] = piece;
	displayChessboard();
}

function removePiece(row,column) {
	if(row == undefined || column == undefined) {
		return "Error:  missing one or more parameters";
	}
	chessboard[row][column] = 0;
	displayChessboard();
}

function isLegalMove(piece) {
	//return true if move is legal
}

function isOccupied(square) {
	// return true if square !== 0
	return (square !== 0);
}
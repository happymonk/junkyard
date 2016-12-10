var chessboard = new Chessboard;

var moves = { nw:[-1,-1] , n:[-1,0] , ne:[-1, 1],
			   w:[ 0,-1] ,             e:[ 0, 1],
			  sw:[ 1,-1] , s:[ 1,0] , se:[ 1, 1], 
};

var pieces = {pawn	:{ID:1, movesWhite:[], 
						    movesBlack:[]
					},
			  knight:{ID:2, moves:[[-2,-1],[-2,1],[-1,-2],[-1,2],
								   [ 1,-2],[ 1,2],[ 2,-1],[ 2,1]]
					},
			  
			  bishop:{ID:3, moves:[ moves.nw,           moves.ne,
								    
									moves.sw, 		    moves.se]
					},
			  
			  rook	:{ID:4, moves:[ 			   moves.n,
								    moves.w,        	 moves.e,
											   moves.s]
					},
			  
			  queen	:{ID:5, moves:[ moves.nw , moves.n , moves.ne,
								    moves.w  ,           moves.e,
									moves.sw , moves.s , moves.se]
					},
			  
			  king	:{ID:6, moves:[ moves.nw , moves.n , moves.ne,
								    moves.w  ,           moves.e,
									moves.sw  ,moves.s , moves.se]
					}
};


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
	if (!isOccupied(chessboard[row][column])){
		chessboard[row][column] = piece.ID;
	}	
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
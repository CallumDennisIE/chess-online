// Checks to see if all of the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Gets all squares on the board
    let squares = document.getElementsByClassName("box");

    // Iterates through each square
    for (let square of squares) {

        // Assign the correct chess pieces
        assignPieces(square);

        // Checks to see if any square has been clicked
        square.addEventListener("click", function () {
            checkSquare(square);
        });
    }
});

// Assigns the correct pieces to the squares based on the data attributes
function assignPieces(square) {
    if (square.dataset.colour === "white") {
        switch (square.dataset.piece) {
            case "king":
                square.textContent = "♔";
                break;
            case "queen":
                square.textContent = "♕";
                break;
            case "rook":
                square.textContent = "♖";
                break;
            case "bishop":
                square.textContent = "♗";
                break;
            case "knight":
                square.textContent = "♘";
                break;
            case "pawn":
                square.textContent = "♙";
                break;
        }
    } else {
        switch (square.dataset.piece) {
            case "king":
                square.textContent = "♚";
                break;
            case "queen":
                square.textContent = "♛";
                break;
            case "rook":
                square.textContent = "♜";
                break;
            case "bishop":
                square.textContent = "♝";
                break;
            case "knight":
                square.textContent = "♞";
                break;
            case "pawn":
                square.textContent = "♟︎";
                break;
        }
    }
};

// Check which piece is selected and call the relevant function
function checkSquare(square) {

    // Check if current turn matches colour of selected piece
    if (getCurrentTurn() === square.dataset.colour) {

        // Get the data attribute 'piece' from the selected square
        switch (square.dataset.piece) {
            case "pawn":
                pawnMoves(square);
                break;
            case "rook":
                rookMoves(square);
                break;
            case "bishop":
                bishopMoves(square);
                break;
            case "knight":
                knightMoves(square);
                break;
            case "king":
                kingMoves(square);
                break;
            case "queen":
                queenMoves(square);
                break;
        }

        // Change turn after clicking on correct coloured piece
        changeCurrentTurn();
    }
}

function pawnMoves(pawn) {
    alert('Pawn is clicked');

    // Sets position variable based on current square occupied
    let position = [pawn.dataset.file, pawn.dataset.rank];
    let moves;
    let direction;

    // Set the ammount of squares moved, based on if the piece has moved previously
    if (pawn.hasAttribute("data-has-moved")) {
        moves = 1;
    } else {
        moves = 2;
    }

    // Set direction of movement based on current player turn
    if (getCurrentTurn() === "white") {
        // Move forward by number of moves
        direction = checkSquares(0, 1, moves, position, false);
    } else {
        // Move forward by number of moves
        direction = checkSquares(0, -1, moves, position, false);
    }

    for (let value of direction) {
        highlightSquare(value, position);
    } 
}

function rookMoves(rook) {
    alert('Rook is clicked');
}

function bishopMoves(bishop) {
    alert('Bishop is clicked');
}

function knightMoves(knight) {
    alert('Knight is clicked');
}

function kingMoves(king) {
    alert('King is clicked');
}

function queenMoves(queen) {
    alert('Queen is clicked');
}

// Returns the current player turn from HTML DOM 
function getCurrentTurn() {
    turn = document.getElementById("player-turn").textContent.toLowerCase();

    return (turn);
}

// Changes the current turn to the next player
function changeCurrentTurn() {
    if (getCurrentTurn() === "white") {
        document.getElementById("player-turn").textContent = "Black";
    } else {
        document.getElementById("player-turn").textContent = "White";
    }
}

// Get the HTML object from the file and rank of the squares
function getSquare(file, rank) {
    let newSquare;

    // Iterates through all squares on the board and finds the one that matches the position
    let squares = document.getElementsByClassName("box");
    for (let square of squares) {
        if (square.dataset.file === file && square.dataset.rank === String(rank)) {
            newSquare = square;
        }
    }
    return (newSquare)
}

// Check the squares before they are highlighted
function checkSquares(incrementFile, incrementRank, numberOfMoves, position, capture) {
    let file = position[0];
    let rank = Number(position[1]);
    let newPosition = [];
    let squares = [];

    // Repeat for the number of moves specified
    for (let moves = 0; moves < numberOfMoves; moves++) {

        // Increase or decrease position in alphabet of file value
        file = String.fromCharCode(file.charCodeAt(0) + incrementFile);

        // Increase or decrease rank value
        rank = rank + incrementRank;

        newPosition = [file, rank];
        // Add values to array
        squares.push(newPosition);
    }

    let validSquares = [];

    // Checks to see if the square is valid
    for (let square of squares) {
        if (checkValidPosition(square[0], square[1])) {
            let validPosition = [square[0], square[1]]
            validSquares.push(validPosition);
        }
    }

    let hitOccupied = false;
    let emptySquares = [];

    for (let validSquare of validSquares) {
        if (!hitOccupied) {
            if (checkSquareOccupied(validSquare[0], validSquare[1])) {
                hitOccupied = true;

                // If move is to caputre a piece then call capture function
                if (capture) {
                    let squareToCapture = getSquare(validSquare[0], validSquare[1]);
                    if (squareToCapture.dataset.colour !== getCurrentTurn()) {
                        captureSquare(squareToCapture);
                        emptySquares.push(validSquare);
                    }
                }
            } else {
                emptySquares.push(validSquare);
            }
        }
    }

    return emptySquares;

}

// Check if a square is in a valid position
function checkValidPosition(file, rank) {
    let validFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let validRanks = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let isValid = false;

    // Checks to see if the position is within the bounds of the board
    if (validFiles.includes(file) && validRanks.includes(String(rank))) {
        isValid = true;
    }

    return isValid;
}

// Check to see if the specific square is occupied
function checkSquareOccupied(file, rank) {
    let isOccupied = false;
    let square = getSquare(file, rank);

    // Checks to see if the square already has the HTML attribute for a piece
    if (square.hasAttribute('data-piece')) {
        isOccupied = true;
    }

    return isOccupied;
}

function highlightSquare(newPosition, oldPosition) {
    square = getSquare(newPosition[0], newPosition[1]);
    // Highlights the selected square 
    square.textContent = "X";

    // Attaches an attribute that includes the piece that wants to move to the highlighted square
    square.setAttribute('data-mover-file', oldPosition[0]);
    square.setAttribute('data-mover-rank', oldPosition[1]);
}
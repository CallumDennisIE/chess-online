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
    if (square.textContent === "X") {
        // if highlighted then moveToSquare()

        let position = [square.dataset.file, square.dataset.rank]
        let mover = [square.getAttribute('data-mover-file'), square.getAttribute('data-mover-rank')]

        moveToSquare(position, mover);

    } else {

        // If a non highlighted square is clicked, reset the highlighted squares
        resetHighlightedSquares();

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
        }
    }

}

function pawnMoves(pawn) {
    let moves;
    let position = [pawn.dataset.file, pawn.dataset.rank];
    let destinations = [];

    // Set the ammount of squares moved, based on if the piece has moved previously
    if (pawn.hasAttribute("data-has-moved")) {
        moves = 1;
    } else {
        moves = 2;
    }

    // Set direction of movement based on current player turn
    if (getCurrentTurn() === "white") {
        // Move forward by number of moves
        let forwards = checkSquares(0, 1, moves, position, false);

        // Capture right/left diagonal
        let rightForwards = checkSquares(1, 1, 1, position, true);
        let leftForwards = checkSquares(-1, 1, 1, position, true);
        destinations = [forwards, rightForwards, leftForwards];
    } else {
        // Move forward by number of moves
        let backwards = checkSquares(0, -1, moves, position, false);

        // Capture right/left diagonal
        let rightBackwards = checkSquares(1, -1, 1, position, true);
        let leftBackwards = checkSquares(-1, -1, 1, position, true);
        destinations = [backwards, rightBackwards, leftBackwards];
    }

    // Highlights all squares that are added to it
    for (let direction of destinations) {
        if (direction === destinations[0]) {
            for (let value of direction) {
                highlightSquare(value, position);
            }
        } else {

            for (let value of direction) {
                let target = getSquare(value[0], value[1]);

                // If the square is highlighted in red
                if (target.classList.contains('red')) {

                    // Add the X mark on the square
                    let targetPosition = [value[0], value[1]]
                    highlightSquare(targetPosition, position)
                }
            }
        }
    }
}

function rookMoves(rook) {
    let moves = 8;
    let position = [rook.dataset.file, rook.dataset.rank];
    let destinations = [];

    // Check 8 squares forwards
    let forwards = checkSquares(0, 1, moves, position, true);

    // Check 8 squares backwards
    let backwards = checkSquares(0, -1, moves, position, true);

    // Check 8 squares left
    let left = checkSquares(-1, 0, moves, position, true);

    // Check 8 squares right
    let right = checkSquares(1, 0, moves, position, true);

    destinations = [forwards, backwards, left, right];

    for (let direction of destinations) {
        for (let value of direction) {
            highlightSquare(value, position);
        }
    }
}


function bishopMoves(bishop) {
    let moves = 8;
    let position = [bishop.dataset.file, bishop.dataset.rank];
    let destinations = [];

    // Diagonal left and forwards
    let leftForwards = checkSquares(-1, 1, moves, position, true);
    
    // Diagonal right and forwards
    let rightForwards = checkSquares(1, 1, moves, position, true);
    
    // Diagonal left and backwards
    let leftBackwards = checkSquares(-1, -1, moves, position, true);
    
    // Diagonal right and backwards
    let rightBackwards = checkSquares(1, -1, moves, position, true);

    destinations = [leftForwards, rightForwards, leftBackwards, rightBackwards];

    for (let direction of destinations) {
        for (let value of direction) {
            highlightSquare(value, position);
        }
    }
}

function knightMoves(knight) {
    alert('Knight is clicked');
}

function kingMoves(king){
    let moves = 1;
    let position = [king.dataset.file, king.dataset.rank];
    let destinations = [];

    // Check each cardinal direction
    // Forwards
    let forwards = checkSquares(0, 1, moves, position, true);

    // Backwards
    let backwards = checkSquares(0, -1, moves, position, true);

    // Right
    let right = checkSquares(1, 0, moves, position, true);

    // Left
    let left = checkSquares(-1, 0, moves, position, true);

    // Check each diagonal direction

    // Check diagonal right and forward
    let rightForwards = checkSquares(1, 1, moves, position, true);

    // Check diagonal left and forward
    let leftForwards = checkSquares(-1, 1, moves, position, true);

    // Check diagonal right and backwards
    let rightBackwards = checkSquares(1, -1, moves, position, true);

    // Check diagonal left and backwards
    let leftBackwards = checkSquares(-1, -1, moves, position, true);

    destinations = [forwards, backwards, left, right, leftForwards, rightForwards, leftBackwards, rightBackwards];

    for (let direction of destinations) {
        for (let value of direction) {
            highlightSquare(value, position);
        }
    }
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
        squares.push(newPosition)
    }
    // Validate Squares
    let validSquares = [];
    let emptySquares = [];


    // Checks to see if the square is valid
    for (let square of squares) {
        if (checkValidPosition(square[0], square[1])) {
            let validPosition = [square[0], square[1]]
            validSquares.push(validPosition);
        }
    }

    // Checks to see if the square is currently occupied
    let hitOccupied = false;

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

function captureSquare(square) {
    // Change the square colour to be red
    square.classList.add('red');
    square.setAttribute('data-capture-piece', square.dataset.piece);
    square.setAttribute('data-capture-colour', square.dataset.colour);
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

// Resets all squares that are highlighted
function resetHighlightedSquares() {
    let squares = document.getElementsByClassName("box");
    for (let square of squares) {
        if (square.hasAttribute('data-capture-piece')) {
            resetCapturePiece(square);
        }
        if (square.textContent === "X") {
            square.textContent = null;
            square.removeAttribute('data-mover-file');
            square.removeAttribute('data-mover-rank');
        }
    }
}

function resetCapturePiece(square) {
    square.setAttribute('data-piece', square.getAttribute('data-capture-piece'));
    square.setAttribute('data-colour', square.getAttribute('data-capture-colour'));

    assignPieces(square);
    square.removeAttribute('data-capture-piece');
    square.removeAttribute('data-capture-colour');

    // Removes the red square colour
    square.classList.remove('red');
}

// Move over data attributes to the new square
function moveToSquare(newPosition, oldPosition) {

    // Reset highlighted squares before moving
    resetHighlightedSquares();

    let newSquare = getSquare(newPosition[0], newPosition[1]);
    let oldSquare = getSquare(oldPosition[0], oldPosition[1]);

    newSquare.textContent = oldSquare.textContent;
    newSquare.dataset.colour = oldSquare.dataset.colour;
    newSquare.dataset.piece = oldSquare.dataset.piece;

    newSquare.setAttribute('data-has-moved', '');
    oldSquare.removeAttribute('data-has-moved');

    oldSquare.textContent = null;
    oldSquare.removeAttribute('data-colour');
    oldSquare.removeAttribute('data-piece');
    oldSquare.removeAttribute('data-mover-file');
    oldSquare.removeAttribute('data-mover-rank');

    // Change the current players turn
    changeCurrentTurn();
}
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
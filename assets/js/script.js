// Checks to see if all of the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Refresh the page when the refresh icon is clicked
    let refresh = document.getElementsByClassName("fa-arrows-rotate");
    for (let button of refresh) {

        button.addEventListener("click", function () {
            location.reload();
        });
    }
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

/**
 * Assigns the correct pieces to the squares based on the data attributes.
 * @param square The HTML object for a square on the chessboard that will have pieces assigned on.
 */
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
}

/**
 * Check which piece is selected and calls the relevant movement function.
 * @param square The HTML object for a square on the chessboard. that will be checked to see which piece occupies it.
 */
function checkSquare(square) {
    if (square.textContent === "X") {
        // if highlighted then moveToSquare()

        let position = [square.dataset.file, square.dataset.rank];
        let mover = [square.getAttribute('data-mover-file'), square.getAttribute('data-mover-rank')];

        // If the square being moved to, contains a piece to be captured
        if (square.classList.contains('red')) {

            // Changes the current score by getting the passing the current player and (the current score + the point value of the captured piece)
            changeCurrentScore(getCurrentTurn(), getCurrentScore(getCurrentTurn()) + getPoints(square.dataset.piece));

            // Check to see if the current player has won
            checkWinner(getCurrentScore(getCurrentTurn()), getCurrentTurn());
        }

        moveToSquare(position, mover);

    } else {

        // If a non-highlighted square is clicked, reset the highlighted squares
        resetHighlightedSquares();

        // Check if the current turn matches the colour of the selected piece
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

/**
 * Controls the movement of the pawn piece. Checks to see if the pawn has moved and assigns movement distance, 
 * also checks to see if capture is possible on diagonals.
 * Moves: 1 or 2 squares forwards.
 * Captures: 1 square diagonally left and right.
 * @param pawn The HTML object for the square of the chessboard that contains the pawn piece.
 */
function pawnMoves(pawn) {
    let moves;
    let position = [pawn.dataset.file, pawn.dataset.rank];
    let destinations = [];

    // Set the number of squares moved, based on if the piece has moved previously
    if (pawn.hasAttribute("data-has-moved")) {
        moves = 1;
    } else {
        moves = 2;
    }

    // Set direction of movement based on current player turn
    if (getCurrentTurn() === "white") {
        // Move forward by a number of moves
        let forwards = checkSquares(0, 1, moves, position, false);

        // Capture right/left diagonal
        let rightForwards = checkSquares(1, 1, 1, position, true);
        let leftForwards = checkSquares(-1, 1, 1, position, true);
        destinations = [forwards, rightForwards, leftForwards];
    } else {
        // Move backwards by a number of moves
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
                    let targetPosition = [value[0], value[1]];
                    highlightSquare(targetPosition, position);
                }
            }
        }
    }
}

/**
 * Controls the movement of the rook piece.  
 * Moves/Captures: 8 squares forwards, backwards, left and right.
 * @param rook The HTML object for the square of the chessboard that contains the rook piece.
 */
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

/**
 * Controls the movement of the bishop piece.  
 * Moves/Captures: 8 squares diagonally in each direction.
 * @param bishop The HTML object for the square of the chessboard that contains the bishop piece.
 */
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

/**
 * Controls the movement of the knight piece.  
 * Moves: 2 squares left/right + 1 square forward / 2 squares forward + 1 square left / right.
 * Capture: Only captures squares it lands on.
 * @param knight The HTML object for the square of the chessboard that contains the knight piece.
 */
function knightMoves(knight) {
    let moves = 1;
    let position = [knight.dataset.file, knight.dataset.rank];
    let destinations = [];

    // Right 1, Forward 2
    let rightOneForwardTwo = checkSquares(1, 2, moves, position, true);
    // Right 2, Forward 1
    let rightTwoForwardOne = checkSquares(2, 1, moves, position, true);

    // Left 1, Forward 2
    let leftOneForwardTwo = checkSquares(-1, 2, moves, position, true);
    // Left 2, Forward 1
    let leftTwoForwardOnce = checkSquares(-2, 1, moves, position, true);

    // Right 1, Backward 2
    let rightOneBackwardTwo = checkSquares(1, -2, moves, position, true);
    // Right 2, Backward 1
    let rightTwoBackwardOne = checkSquares(2, -1, moves, position, true);

    // Left 1, Backward 2
    let leftOneBackwardTwo = checkSquares(-1, -2, moves, position, true);
    // Left 2, Backward 1
    let leftTwoBackwardOne = checkSquares(-2, -1, moves, position, true);

    destinations = [rightOneForwardTwo, rightTwoForwardOne, leftOneForwardTwo, leftTwoForwardOnce, rightOneBackwardTwo, rightTwoBackwardOne, leftOneBackwardTwo, leftTwoBackwardOne];

    for (let direction of destinations) {
        for (let value of direction) {
            highlightSquare(value, position);
        }
    }
}

/**
 * Controls the movement of the king piece.  
 * Moves/Captures: 1 square in every direction.
 * @param king The HTML object for the square of the chessboard that contains the king piece.
 */
function kingMoves(king) {
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

/**
 * Controls the movement of the queen piece.  
 * Moves/Captures: 8 squares in every direction.
 * @param queen The HTML object for the square of the chessboard that contains the queen piece.
 */
function queenMoves(queen){
    let moves = 8;
    let position = [queen.dataset.file, queen.dataset.rank];
    let destinations = [];

    // Check each cardinal direction
    let forwards = checkSquares(0, 1, moves, position, true);
    let backwards = checkSquares(0, -1, moves, position, true);
    let left = checkSquares(1, 0, moves, position, true);
    let right = checkSquares(-1, 0, moves, position, true);

    // Check each diagonal direction
    let rightForwards = checkSquares(1, 1, moves, position, true);
    let leftForwards = checkSquares(1, -1, moves, position, true);
    let leftBackwards = checkSquares(-1, -1, moves, position, true);
    let rightBackwards =checkSquares(-1, 1, moves, position, true);

    destinations = [forwards, backwards, left, right, leftForwards, rightForwards, leftBackwards, rightBackwards];

    for (let direction of destinations) {
        for (let value of direction) {
            highlightSquare(value, position);
        }
    }
}

/**
 * Gets the current player turn from the DOM and returns it.
 * @returns turn The value of which player is active this turn.
 */
function getCurrentTurn() {
    let turn = document.getElementById("player-turn").textContent.toLowerCase();

    return (turn);
}

/**
 * Changes the current player turn to the next player, by editing the DOM.
 */
function changeCurrentTurn() {
    if (getCurrentTurn() === "white") {
        document.getElementById("player-turn").textContent = "Black";
    } else {
        document.getElementById("player-turn").textContent = "White";
    }
}

/**
 * Get the HTML object of a chessboard square from the position parameters.
 * @param file The position of the piece, on the chessboard in the x-axis.
 * @param rank The position of the piece, on the chessboard in the y-axis.
 * @returns newSquare The HTML object of the chessboard square.
 */
function getSquare(file, rank) {
    let newSquare;

    // Iterates through all squares on the board and finds the one that matches the position
    let squares = document.getElementsByClassName("box");
    for (let square of squares) {
        if (square.dataset.file === file && square.dataset.rank === String(rank)) {
            newSquare = square;
        }
    }
    return (newSquare);
}

/**
 * Checks through the movement of a piece and performs validation on each movement position.
 * @param incrementFile The number that the file position should be incremented each move.
 * @param incrementRank The number that the rank position should be incremented each move.
 * @param numberOfMoves The number of moves a piece makes.
 * @param position The original position of the piece, including file and rank.
 * @param capture If the piece can capture during this movement.
 * @returns emptySquares The valid squares that can be highlighted for the movement.
 */
function checkSquares(incrementFile, incrementRank, numberOfMoves, position, capture) {
    let file = position[0];
    let rank = Number(position[1]);
    let newPosition = [];
    let squares = [];

    // Repeat for the number of moves specified
    for (let moves = 0; moves < numberOfMoves; moves++) {

        // Increase or decrease position in the alphabet of file value
        file = String.fromCharCode(file.charCodeAt(0) + incrementFile);

        // Increase or decrease rank value
        rank = rank + incrementRank;

        newPosition = [file, rank];
        // Add values to array
        squares.push(newPosition);
    }
    // Validate Squares
    let validSquares = [];
    let emptySquares = [];


    // Checks to see if the square is valid
    for (let square of squares) {
        if (checkValidPosition(square[0], square[1])) {
            let validPosition = [square[0], square[1]];
            validSquares.push(validPosition);
        }
    }

    // Checks to see if the square is currently occupied
    let hitOccupied = false;

    for (let validSquare of validSquares) {
        if (!hitOccupied) {
            if (checkSquareOccupied(validSquare[0], validSquare[1])) {
                hitOccupied = true;

                // If the move is to capture a piece, then call the capture function
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

/**
 * Checks the file and rank of a piece to see if they are within the bounds of the chessboard.
 * @param file The x-axis of the piece on the board.
 * @param rank The y-axis of the piece on the board.
 * @returns isValid If the piece is within the chessboard limits.
 */
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

/**
 * Adds a class to the square to change the square to red, signalling that a piece can be captured.
 * Stores the piece and colour of the piece that will be captured, so that they can be reset if needed.
 * @param square The HTML Object of the square, containing the piece that will be captured.
 */
function captureSquare(square) {
    // Change the square colour to red
    square.classList.add('red');
    square.setAttribute('data-capture-piece', square.dataset.piece);
    square.setAttribute('data-capture-colour', square.dataset.colour);
}

/**
 * Checks to see if the provided square is occupied by another piece.
 * @param file The x-axis of the piece on the board.
 * @param rank The y-axis of the piece on the board.
 * @returns isOccupied If the square at the position is occupied by a piece.
 */
function checkSquareOccupied(file, rank) {
    let isOccupied = false;
    let square = getSquare(file, rank);

    // Checks to see if the square already has the HTML attribute for a piece
    if (square.hasAttribute('data-piece')) {
        isOccupied = true;
    }

    return isOccupied;
}

/**
 * Highlights the provided square, to allow the player to know where they can move to.
 * Also stores the position of the piece that can move to the highlighted square.
 * @param newPosition The file and rank of the destination square.
 * @param oldPosition The file and rank of the piece that can move to the highlighted square.
 */
function highlightSquare(newPosition, oldPosition) {
    let square = getSquare(newPosition[0], newPosition[1]);
    // Highlights the selected square 
    square.textContent = "X";

    // Attaches an attribute that includes the piece that wants to move to the highlighted square
    square.setAttribute('data-mover-file', oldPosition[0]);
    square.setAttribute('data-mover-rank', oldPosition[1]);
}

/**
 * Iterates through all squares and resets all squares that are highlighted.
 * Resets square by removing the 'X' and relevant data attributes.
 * If a square contains a piece that was highlighted for capture, then the resetCapturePiece() function is called.
 */
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

/**
 * Resets the attributes, content and class of a highlighted capture piece.
 * @param square The HTML object of a square that contains a highlighted piece to be captured.
 */
function resetCapturePiece(square) {
    square.setAttribute('data-piece', square.getAttribute('data-capture-piece'));
    square.setAttribute('data-colour', square.getAttribute('data-capture-colour'));

    assignPieces(square);
    square.removeAttribute('data-capture-piece');
    square.removeAttribute('data-capture-colour');

    // Removes the red square colour
    square.classList.remove('red');
}

/**
 * Moves the data attributes and the chess piece from an old square to a new one.
 * @param newPosition The file and rank of the destination square.
 * @param oldPosition The file and rank of the source square.
 */
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

    // Change the current player's turn
    changeCurrentTurn();
}

/**
 * Returns the point value of the piece that is provided to it.
 * @param piece The name of a chess piece, to get the points for.
 * @returns points.get(piece) The points value of the provided piece.
 */
function getPoints(piece) {
    const points = new Map([
        ["pawn", 1],
        ["bishop", 3],
        ["knight", 3],
        ["rook", 5],
        ["queen", 9],
        ["king", 15]
      ]);

      return (points.get(piece));
}

/**
 * Gets the player score of the provided player.
 * @param player The lowercase string, of the player that is to have their score checked.
 * @returns score The score value of the provided player.
 */
 function getCurrentScore(player) {
    let score = Number(document.getElementById(`points-${player}`).textContent);

    return (score);
}

/**
 * Edits the HTML of the provided player's points, and assigns a new score.
 * @param player The lowercase string of the player that will have their score edited.
 * @param newScore The new value of the player's score.
 */
 function changeCurrentScore(player, newScore) {
    document.getElementById(`points-${player}`).textContent = newScore;
}

/**
 * Check the provided score to see if the current player has won the game. If they have won, call the displayWinner function.
 * @param score, the value checked to see if it matches or exceeds the maximum number of available points.
 * @param player The lowercase string of the player that is checked to see if they have won.
 */
function checkWinner(score, player) {
    let winner;
    const MAX_POINTS = 54;
    if (score >= MAX_POINTS) {
        winner = player;
        displayWinner(winner);
    }
}

/**
 * Capitalise the first letter of the winning player and display them in the HTML.
 * @param player The lowercase string of the player that is displayed as the winner.
 */
function displayWinner(player) {
    // Capitalise the first letter of the winning player
    let winner = player.charAt(0).toUpperCase() + player.slice(1);

    // Set the HTML content to include the winning player's name
    document.getElementById('winner').textContent = winner;
    let winbox = document.getElementsByClassName('winbox');

    // Show the winning player
    for (let box of winbox) {
        box.style.display = 'block';
    }
}
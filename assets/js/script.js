// Checks to see if all of the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Gets all squares on the board
    let squares = document.getElementsByClassName("box");

    // Iterates through each square
    for (let square of squares) {
        // Checks to see if any square has been clicked
        square.addEventListener("click", function () {
            alert(`Clicked - ${square.dataset.file}, ${square.dataset.rank}`)
        });
    }
});
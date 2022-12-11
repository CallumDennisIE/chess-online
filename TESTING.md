# Chess Online - Testing

![Chess Online Site on multiple devices](/assets/images/README/responsive-design.png)

[View the live project here.](https://callumdennisie.github.io/chess-online/)

[View the project README here.](README.md)


## W3C Validator
All HTML files were validated using the W3C Validator. The results are shown below:
- 404.html - No errors or warnings to show.
- help.html - No errors or warnings to show.
- index.html - No errors or warnings to show.

The CSS file was validated using the W3C Jigsaw Validator. The result is below:

- style.css - No Error Found.

## JSHint
JSHint showed 0 errors and only a single warning. This warning is provided below:

![JSHint warning](/assets/images/TESTING/jshint-warning.png)

The warning is in relation to the following code:
```
for (let square of squares) {
    square.addEventListener("click", function () {
        checkSquare(square);
    });
}
```

The code iterates through each square and adds an event listener to each of the boxes within the chessboard. As the code is required to add the listener and the warning is not a significant issue, the code has been kept and the warning has been documented here.

### Lighthouse
Performance, Accessibility, Best Practices and SEO, were checked using the Chrome Developer Tool - Lighthouse.

#### Desktop Results:

Play Page Results:

![Play page desktop lighthouse results](/assets/images/TESTING/lighthouse-play-desktop.png)

Help Page Results:

![Help page desktop lighthouse results](/assets/images/TESTING/lighthouse-help-desktop.png)

404 Page Results:

![404 page desktop lighthouse results](/assets/images/TESTING/lighthouse-404-desktop.png)

---

#### Mobile Results:

Play Page Results:

![Play page mobile lighthouse results](/assets/images/TESTING/lighthouse-play-mobile.png)

Help Page Results:

![Help page mobile lighthouse results](/assets/images/TESTING/lighthouse-help-mobile.png)

404 Page Results:

![404 page mobile lighthouse results](/assets/images/TESTING/lighthouse-404-mobile.png)

### WAVE Report

The accessibility of the pages was checked using the WAVE web accessibility evaluation tool

Play Page Results:

![Play page mobile WAVE results](/assets/images/TESTING/wave-play.png)

Help Page Results:

![Help page mobile WAVE results](/assets/images/TESTING/wave-help.png)

404 Page Results:

![404 page mobile WAVE results](/assets/images/TESTING/wave-404.png)

## Manual Testing:
### User Stories Testing
#### Goals of a user who wants to know how to play:
| Goal          | Implementation      |
|:-------------|:-------------|
| I want to know how to control the pieces in the game. | The 'help.html' page explains to the user how to move their pieces. It describes the controls such as 'how to see the available moves for a specific piece' and 'how to move a piece', the controls are also very simple as they require clicking on the piece you would like to move, this removes complexity and makes it easier for players to start playing the game. The squares that can be moved too are also highlighted with either an 'X' or an 'X' with a red background, making it very clear what the possible moves are.
| I do not want to have to learn complex moves in order to play. | The game avoids using the more complex rules of chess, for example, 'En Passant', 'check' or 'castling', allowing newer players to understand the basics of movement and capturing. The 'help.html' page explains that this is a 'variant' game, to explain the changed rules.

#### Goals of a user that wants to practice playing chess
| Goal          | Implementation      |
|:-------------|:-------------|
| I want to be able to move pieces in the same way that they move in chess. | The chess pieces in the game follow the basic movement rules of the real chess pieces. For example, the king can move 1 square in all directions. This allows players to practice moving chess pieces without having to play the physical game.
| I want the game to look like a classic chess game. | The design of the project has taken inspiration from the classic game of chess, with the checkerboard chessboard and the colour scheme using contrasting black and white. The pieces use the Unicode values for chess symbols rather than custom icons, this makes the game universal as the pieces are easily recognisable.

#### Goals of a user that wants to compete with their friend
| Goal          | Implementation      |
|:-------------|:-------------|
| I want to be able to capture my friend's pieces. | The game is created for two players, which allows people to compete with their friends on the same device. Players can capture their opponent's pieces by clicking on a piece that is within movement range of their opponent's piece, and then clicking on their opponent's piece to capture it. The process of movement and capture is explained more on the ‘help.html’ page.
| I want the game to have a win condition. | Players can win the game by gaining points by capturing their opponent's pieces. These points are displayed below the chessboard.  If a player captures all of their opponent's pieces, they gain 52 points. A player that gains 52 points wins the game and this is displayed above the chessboard. Players can then click 'Reset Game' to start the game again.

### Full Testing
The devices used to test are:
- iPhone 11 Pro Max
- MacBook Air (M1, 2020) - 13.3-inch (2560 × 1600) Built-in Retina Display
- MacBook Air (M1, 2020) - 27-inch (2560 × 1440) Display

These tests have been performed on the following browsers:
- Google Chrome - Desktop
- Google Chrome - Mobile
- Safari -  Mobile

#### Features Tested
- The validation of the highlighted squares. This involved checking that a piece could not be placed outside of the bounds of the chessboard, it also involved testing that a player could not capture or move into their own squares.

- The points values of the pieces were tested, to ensure that all pieces had the correct value and that this added the correct amount to the scores.

- The win condition was tested to ensure the game could be won if players get the right amount of points by capturing all opposing player's pieces.

#### Bugs Found
- A player can technically not be able to move, if they only have pawns left and all are on the end of the opposing player's side. This has been fixed by adding the 'Reset Game' button, allowing players to reset the game and avoid them getting stuck.


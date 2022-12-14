# Chess Online

![Chess Online Site on multiple devices](/assets/images/README/responsive-design.png)

[View the live project here.](https://callumdennisie.github.io/chess-online/)

## Contents
* [About](#about)
* [User Experience](#user-experience)
    * [User Stories](#user-stories)
* [Design](#design)
    * [Colour Scheme](#colour-scheme)
    * [Typography](#typography)
    * [Imagery](#imagery)
    * [Wireframes](#wireframes)
* [Features](#features)
* [Technologies Used](#technologies-used)
    * [Languages Used](#languages-used)
    * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
* [Deployment & Local Development](#deployment--local-development)
    * [Deployment](#deployment)
    * [Local Development](#local-development)
* [Testing](#testing)
* [Credits](#credits)
    * [Code](#code)
    * [Media](#media)

## About
Chess Online is a variant of the classic game chess. In this game, 2 players use different pieces to move around the chessboard and try to capture all of their opponent's pieces. 

Each piece has a different set of moves and a different point value if they are captured. The player that captures all of their opponent's pieces (and gets all 52 points) wins!

The game is aimed at people interested in playing chess, that do not have to worry about complex chess rules such as 'En Passant' or 'castling'. The game was created to allow first-time players of chess to understand the basic movement and rules, and also to have fun at the same time.

[Back to top!](#chess-online)

## User Experience
### User Stories
#### User who wants to know how to play:
- I want to know how to control the pieces in the game.
- I do not want to have to learn complex moves in order to play.

#### User that wants to practice playing chess:
- I want to be able to move pieces in the same way that they move in chess.
- I want the game to look like a classic chess game.

#### User that wants to compete with their friend:
- I want to be able to capture my friend's pieces.
- I want the game to have a win condition.

[Back to top!](#chess-online)

## Design
### Colour Scheme
The project uses a very simple colour scheme to match the pieces on a chessboard. The text is black on a white background, to create a strong contrast, the chess pieces are also either fully black or white with a black outline, making it very clear which piece is for a specific player.

The chessboard is alternating white and grey squares, to allow both white and black pieces to contrast well off of the background. The only other colour is the red for highlighting a square to be captured, this is a strong colour to make it clear when a piece is able to be captured, as this is part of the win condition for the game.
<details>
<summary>Click for Image: Colour Palette</summary>

![Colour Palette](/assets/images/README/palette-colours.png)

</details>

### Typography
The fonts used in this project are taken from [Google Fonts](https://fonts.google.com/).

- The font [Acme](https://fonts.google.com/specimen/Acme?query=acme) was used for the headings.
- [Exo](https://fonts.google.com/specimen/Exo?query=exo) was used for the remaining text on the project.
- If the fonts from Google Fonts could not be displayed, then 'Sans-serif' was used as a backup font.



### Imagery

The only image files used in the project were for the favicon, which is displayed on all HTML pages.

<details>
<summary>Click for Image: Favicon</summary>

![The favicon image](/assets/images/favicon/apple-touch-icon.png)

</details>



### Wireframes

Chessboard at Game Start - Wireframes:
<details>
<summary>Click for Image: Chessboard at Game Start - Mobile Wireframe</summary>

![About Page Mobile Wireframe](/assets/images/README/wireframe-start-mobile.png)

</details>

<details>
<summary>Click for Image: Chessboard at Game Start - Desktop Wireframe</summary>

![About Page Mobile Wireframe](/assets/images/README/wireframe-start-desktop.png)

</details>

***

Chessboard when Capturing a Piece - Wireframes:
<details>
<summary>Click for Image: Chessboard when Capturing a Piece - Mobile Wireframe</summary>

![About Page Mobile Wireframe](/assets/images/README/wireframe-capture-mobile.png)

</details>

<details>
<summary>Click for Image: Chessboard when Capturing a Piece - Desktop Wireframe</summary>

![About Page Mobile Wireframe](/assets/images/README/wireframe-capture-desktop.png)

</details>

***

[Back to top!](#chess-online)

## Features

### Favicon
A favicon was created to create a consistent brand image between the HTML pages of the site. Also allows the site to be easily recognised in the tabs of the browser.

The favicon uses the same colour scheme and Unicode icon as the pieces on the chessboard.

<details>
<summary>Click for Image: Favicon</summary>

![The favicon image](/assets/images/favicon/apple-touch-icon.png)

</details>

### Navbar

The navbar is included on all pages of the project. The design is consistent on all pages to provide a consistent user experience. Contains the website title and links to the index.html and the help.html pages.

<details>
<summary>Click for Image: Navbar</summary>

![The navbar image](/assets/images/README/feature-navbar.png)

</details>

The links of the navbar are also underlined on hover, to show that they can be clicked.

<details>
<summary>Click for Image: Navbar on hover</summary>

![The navbar when a link is hovered over image](/assets/images/README/feature-navbar-hover.png)

</details>

### Custom 404 Error Page

This page will display when the requested page is not able to be displayed. The link on the error page will navigate to the index.html page. The error page also uses the same header as the other HTML pages to allow further navigation.

<details>
<summary>Click for Image: Custom 404 Error Page</summary>

![The Custom 404 Error Page](/assets/images/README/feature-404.png)

</details>

### How to play page (help.html)
The help.html page tells the user what the project is and how to play the game. The page explains the controls such as how to move and how to capture pieces. The page also shows the points value of each piece.

<details>
<summary>Click for Image: help.html Page</summary>

![The help.html Page](/assets/images/README/feature-help.png)

</details>

### Reset Game Button
The reset game button will refresh the page when click, this will reset all the pieces to their starting location and will reset the scores. This allows players to restart the game if they have won or would like to retry the game.

<details>
<summary>Click for Image: Reset Game Button</summary>

![The Reset Game Button](/assets/images/README/feature-reset.png)

</details>

### Player Turn Indicator
The player turn indicator shows which player can currently move their pieces. This will update when the next player can move.
<details>
<summary>Click for Image: Player Turn Indicator</summary>

![The Player Turn Indicator](/assets/images/README/feature-turn.png)

</details>

### Player Points Display
Both players points are displayed underneath the chessboard. The points values are updated after a piece is captured.

<details>
<summary>Click for Image: Player Points Display</summary>

![The Player Points Display](/assets/images/README/feature-points.png)

</details>

### Winning Player Message
The winning player is displayed in a message above the chessboard. This message is hidden until a player wins the game.

<details>
<summary>Click for Image: Winning Player Message</summary>

![Winning Player Message](/assets/images/README/feature-winner.png)

</details>

### Highlighting Movement
When a player clicks one of their pieces on their turn, they will be shown the available squares that the piece can move to, these squares will be highlighted with an 'X'. If no available squares are present, no squares are shown. If anywhere else is clicked except for a player piece, then the highlighted squares are cleared.

The reason that players are not informed when they click an opposing piece with a message such as "It is not your turn", is that it is distracting to the player and will interrupt the flow of the game.

<details>
<summary>Click for Image: Highlighting Movement</summary>

![Highlighting Movement](/assets/images/README/feature-highlight.png)

</details>

### Piece Movement
If a highlighted square is clicked on, then the piece will move from its previously occupied square to the new square on the board.

<details>
<summary>Click for Image: Piece Movement</summary>

![Piece Movement](/assets/images/README/feature-move.png)

</details>

### Piece Capture
If a square that would be highlighted by a piece, is occupied by an opposing player's piece, then the opposing player's piece is highlighted with an 'X' and the square is changed to red.

If the highlighted capture square is moved to, then the opposing player's piece is removed from the chessboard and the value of the piece is added to the moving player's score.

<details>
<summary>Click for Image: Piece Capture</summary>

![Piece Capture](/assets/images/README/feature-capture.png)

</details>

[Back to top!](#chess-online)

## Technologies Used
### Languages Used
- HTML5
- CSS3
- JavaScript

### Frameworks, Libraries & Programs Used
- [Git](https://git-scm.com/):
    - Git commands were used for version control.
- [GitHub](https://github.com/):
    - Project was hosted on GitHub and GitHub Pages hosted the live site.
- [Gitpod](https://www.gitpod.io/):
    - The project was developed using Gitpod development environment.
- [CodePen](https://codepen.io/):
    - Features were tested on CodePen, to test functions in isolation of the main project.
- [Coolers](https://coolors.co/):
    - Coolers was used to generate the colour palette for the project.
- [Favicon](https://favicon.io/):
    - A favicon was generated from this website and applied to the HTML pages.
- [Balsamiq](https://balsamiq.com/):
    - Balsamiq was used to create the wireframes for the project.
- [Font Awesome](https://fontawesome.com/):
    - The 'Reset Game' icon was taken from the Font Awesome Icons.
- [Google Fonts](https://fonts.google.com/):
    - The fonts used in the project were imported from Google Fonts.
- [TinyPNG](https://tinypng.com/):
    - All images in the README and project have been compressed using TinyPNG.
- [Am I Responsive?](https://ui.dev/amiresponsive):
    - The title image of the README was taken from this site. The image shows the site on multiple devices.
- [WAVE](https://wave.webaim.org/):
    - The WAVE tool was used to test the accessibility of all pages.
- [W3C Validator](https://validator.w3.org/)
    - All HTML used in the project was validated using the W3C HTML Validator.
- [W3C Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
    - All of the CSS file used in the project was validated with the W3C CSS validator.
- [JSHint](https://jshint.com/)
    - The JavaScript code was validated using the JSHint website tool.
- [Chrome Developer Tool - Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
    - Performance, Accessibility, Best Practices and SEO across the project was tested using Lighthouse.


[Back to top!](#chess-online)

## Deployment & Local Development
### Deployment
The Chess Online project was deployed using GitHub Pages.

[You can view the live site through this link.](https://callumdennisie.github.io/chess-online/)

Steps to deploy this project using GitHub Pages:
1. Navigate to the GitHub repository for this project: [CallumDennisIE/chess-online](https://github.com/CallumDennisIE/chess-online).
2. Click on the 'Settings' tab: [CallumDennisIE/chess-online/settings](https://github.com/CallumDennisIE/chess-online/settings).
3. Click on the 'Pages' section: [CallumDennisIE/chess-online/settings/pages](https://github.com/CallumDennisIE/chess-online/settings/pages)
4. Select the 'Main' source from the dropdown.
5. Wait a few minutes for the site to deploy.
6. The project will be published and a link will be provided to the live site: [Example link](https://callumdennisie.github.io/chess-online/).

For more information on how to deploy a site with GitHub pages, please click [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

***
### Local Development
Steps to fork this project using GitHub:
1. Navigate to the GitHub repository for this project: [CallumDennisIE/chess-online](https://github.com/CallumDennisIE/chess-online).
2. Click the 'Fork' button (top right-hand side of the repository page).

For more information on how to fork a GitHub repository please click [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

Steps to clone this project using GitHub:
1. Navigate to the GitHub repository for this project: [CallumDennisIE/chess-online](https://github.com/CallumDennisIE/chess-online).
2. Click on the 'Code' button, located above the project files.
3. Select 'HTTPS' as the method to clone the repository.
4. Copy the link provided, located under 'HTTPS': https://github.com/CallumDennisIE/chess-online.git
5. Open the Terminal in the location you would like the repository to be cloned to.
6. Type `git clone` and then the link provided in step 4:

``` $ git clone  https://github.com/CallumDennisIE/chess-online.git ```


For more information on how to clone a GitHub repository please click [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

[Back to top!](#chess-online)

## Testing
[View the project testing document here.](TESTING.md)

## Credits
### Code
All code used in the project was created by me for this project.

### Inspiration
- [Chess.com](https://www.chess.com/)
    - The project is inspired by the chess player on chess.com, Chess Online is an attempt to emulate this website, while aiming at newer players.
    - The point values and piece movement rules were taken from the chess.com rules section.

[Back to top!](#chess-online)
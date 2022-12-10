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

The code iterates through each square and adds a event listener to each of the boxes within the chessbox. As the code is required to add the listener and the warning is not a significant issue, the code has been kept and the warning has been documented here.

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

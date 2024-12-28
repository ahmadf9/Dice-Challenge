/*----- PLAYER 1 -----*/
// Create a Random Number
const randomNumber1 = Math.trunc(Math.random() * 6) + 1;
// console.log(randomNumber);

const randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

// Change the image to a Random Dice
const randomImageSource1 = "images/" + randomDiceImage; // Images/dice1.png - images/dice6.png
const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

/*----- PLAYER 2 -----*/
const randomNumber2 = Math.trunc(Math.random() * 6) + 1;
// console.log(randomNumber2);

const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Implement the logic
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

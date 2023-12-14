

console.log("Welcome to DotStone Nightclub!\n How old are my friend ?");
let age = 22;


if (age < 21) {
  console.log("Sorry SIR!, Underage are not allowed!")
} else {
  console.log("Welcome SIR, Enjoy your stay and play responsibly🤝")
}

let firstCard = 18;
let secondCard = 3;
let sum = firstCard + secondCard;
let hashBlackJack = false;
let isAlive = true;


if (sum <= 20) {
  console.log("Do you want to draw a new card? 😊")
} else if (sum === 21) {
  console.log("Wohoooo! You have a Blackjack 🤗")
  hashBlackJack = true;
} else {
  console.log("You are out the game looser 🏃‍♀️🚶‍♂️")
  isAlive = false;
}




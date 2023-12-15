console.log("Welcome to DotStone Nightclub!\n How old are my friend ?");

let age = 22;

if (age < 21) {
  console.log("Sorry SIR!, Underage are not allowed!")
} else {
  console.log("Welcome SIR, Enjoy your stay and play responsibly🤝")
}

let firstCard = 8;
let secondCard = 13;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hashBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");


// function for start game button
function startGame() {
  renderGame()
}

// function to renderGame
function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 😊"
  } else if (sum === 21) {
    message = "Wohoooo! You have a Blackjack 🤗"
    hashBlackJack = true;
  } else {
    message = "You are out the game looser 🏃‍♀️🚶‍♂️"
    isAlive = false;
  }
  messageEl.textContent = message;
}

// Function to draw a new line
function newCard() {
  let card = 5;
  sum += card;
  renderGame()
  cards.push(card);

}

// continue at 4:50
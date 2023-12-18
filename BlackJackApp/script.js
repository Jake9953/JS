let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0;
let hashBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
// Function that returns a random number
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber;
  }


}
// function for start game button
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;
  renderGame()
}

// function to renderGame
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
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
  if (isAlive === true && hashBlackJack === false) {
    let card = getRandomCard()
    sum += card;
    cards.push(card);
    renderGame()
  }

}


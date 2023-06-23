let firstCard = 11;
let secondCard = 7;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard() {
    let thirdCard = 3
    sum = sum + thirdCard;
    renderGame();
}
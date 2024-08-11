function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").innerText = "You rolled a " + diceResult;
    movePlayer(diceResult);
}

function movePlayer(diceResult) {
    // Example function to move a player's piece
    // This function will need to be extended for a full Ludo game
    alert("Move player by " + diceResult + " steps.");
}

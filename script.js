
let random_number = Math.floor(Math.random() * 100) + 1;

let attempts = 7;

const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

guessForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        message.textContent = "Enter a number between 1 and 100!";
        return;
    }

    attempts--;

    if (guess === random_number) {

        message.textContent = "🎉 Congratulations! You Won!";
        endGame();

    } else if (guess > random_number) {

        message.textContent = "📈 Too High! Try Again.";

    } else {

        message.textContent = "📉 Too Low! Try Again.";

    }

    attemptsDisplay.textContent = attempts;

    // Check whether attempts are over
    if (attempts === 0 && guess !== random_number) {

        message.textContent = `😢 You Lost! Number was ${random_number}`;
        endGame();

    }

    guessInput.value = "";
});

function endGame() {
    guessInput.disabled = true;
    document.getElementById("guessBtn").disabled = true;
    restartBtn.hidden = false;
}

restartBtn.addEventListener("click", () => {

    random_number = Math.floor(Math.random() * 100) + 1;

    attempts = 7;

    attemptsDisplay.textContent = attempts;
    message.textContent = "You have 7 attempts!";

    guessInput.disabled = false;
    document.getElementById("guessBtn").disabled = false;

    guessInput.value = "";
    restartBtn.hidden = true;

});
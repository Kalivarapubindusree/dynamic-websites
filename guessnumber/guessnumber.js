let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    if (guessNumber > randomNumber) {
        gameResult.textContent = "To High Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "To low try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations!!! You got it!!";
        gameResult.style.backgroundColor = "#1e217c";
    } else {
        gameResult.textContent = "Please Provide a valid Input";
        gameResult.style.backgroundColor = "#1e2175";
    }
}
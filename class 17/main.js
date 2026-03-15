// get the html elements using the dom

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");
const attemptsDisplay = document.getElementById("attempts");
const gamesDisplay = document.getElementById("games");
const pointsDisplay = document.getElementById("points");


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber", randomNumber)


// init attemps, games and points

let attempts = 0;
let totalGames = 0;
let totalPoints = 0;

// function to check the users guess

function checkGuess() {
    const userGuess = Number(guessInput.value);
    // console.log(userGuess);

    // check if the input is valid or not
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter valid number";
        message.style.color = "red";
        return; //stop the further execution
    }

    // increment the attempt counter
    attempts++;
    attemptsDisplay.textContent = attempts; //update the attempts display


    // campare the userguess and random number

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations you guesses in ${attempts} attempts`;
        message.style.color = "green";
        calculatePoints();
        updateGame();
        disableGame();

    } else if (userGuess < randomNumber) {
        // if the guess is to low
        message.textContent = "guess is too low"
        message.style.color = "red"
    } else {
        // guess is too high
        message.textContent = "Too High try again";
        message.style.color = "red"
    }

    // if attempt exceeds more that 5, reset the game automatically
    if(attempts >=5){
        message.textContent = "You have exceeded 5 attempts. Game will restart now. Better luck";
        message.style.color = "white";
        updateGame();
        setTimeout(resetGame, 2000); //2000 milliseconds = 2seconds
    }


}


// function to reset the game
function resetGame() {

    // randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // resetting the attemps
    attempts = 0;
    attemptsDisplay.textContent = attempts;

    guessInput.value = "";
    message.textContent = "";

    // re-enable the input and button 
    guessInput.disabled = false;
    submitBtn.disabled = false;


}

// function to calc the points based on the user attempts

function calculatePoints() {
    if(attempts <=5){
        totalPoints += 10;  //very good
    } else if(attempts <=10){ //good
        totalPoints += 5; //totalpoints = totalpoints + 5
    } else {
        totalPoints += 2; //not good
    }
}


// function to update the total games and display the message
function updateGame() {
    totalGames++;
    gamesDisplay.textContent = totalGames;
    pointsDisplay.textContent = totalPoints;
}

// function to disable the input and button
function disableGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
}


submitBtn.addEventListener("click", checkGuess);

resetBtn.addEventListener("click", resetGame)
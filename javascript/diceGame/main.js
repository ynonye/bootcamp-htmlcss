
let targetScore = 0;


const startButton = document.querySelector(".start-button");
const newGameButton = document.querySelector(".new-game-btn");
const startScreen = document.querySelector("#start-screen");
const instructions = document.querySelector(".top-container");
const startMsg = document.querySelector("#start-msg");


let playerTurn = 1;
let player1TotalScore = 0;
let player1CurrentScore = 0;
let player1TotalWins = 0;
let player2TotalScore = 0;
let player2CurrentScore = 0;
let player2TotalWins = 0;
let gameOn = true;


// player 1
const holdButton = document.querySelector(".hold-btn");
const player1 = document.querySelector("#left-player1");
const player1CurrentScoreDisp = document.querySelector("#player1-current-score");
const player1TotalScoreDisp = document.querySelector("#player1-score");
const player1EndMsg = document.querySelector("#player1-end-msg");
const player1TotalWinsDisp = document.querySelector("#player1-total-wins");
const totalWinsP1 = document.querySelector(".total-wins-p1");

// player 2
const player2 = document.querySelector("#right-player2");
const player2CurrentScoreDisp = document.querySelector("#player2-current-score");
const player2TotalScoreDisp = document.querySelector("#player2-score");
const player2EndMsg = document.querySelector("#player2-end-msg");
const player2TotalWinsDisp = document.querySelector("#player2-total-wins");
const totalWinsP2 = document.querySelector(".total-wins-p2");

// target score input
const targetScoreInput = document.querySelector("#target-score-input");


//  dice variables
const dice1 = document.querySelector("#dice-1");
const dice2 = document.querySelector("#dice-2");
let dice1Value = 1;
let dice2Value = 1;
let diceSum = 0;
const rollDiceButton = document.querySelector(".roll-dice-btn");


const twoSixPopUp = document.querySelector(".two-six-popup");
const twoSixPopUpMsg = document.querySelector("#popup-msg");


targetScoreInput.focus();



// start button functionality
startButton.addEventListener("click", () => {
    targetScore = parseInt(targetScoreInput.value);
    if (targetScore >= 2) {
        startScreen.style.display = "none";
        totalWinsP1.style.visibility = "visible";
        totalWinsP2.style.visibility = "visible";
    } else {
        startMsg.innerText = `Please enter a target score`;
    }
});


newGameButton.addEventListener("click", () => {
    playAudio.play();
    if (startMsg.innerText.length > 27) {
        const msgArr = startMsg.innerText.split("Value must be larger than 2");
        startMsg.innerText = msgArr.join("");
    }
    reset();
    startScreen.style.display = "flex";
    instructions.style.visibility = "hidden";
});


holdButton.addEventListener("click", () => {
    if (gameOn === false) {
        return;
    }
    updateScores();
    checkAndAnnounceWinner();
    playTurn();
});


rollDiceButton.addEventListener("click", () => {
    if (gameOn === false) {
        return;
    }
    diceRollAudio.play();
    roll();
});

// What happenes if there are two 6

twoSixPopUp.addEventListener("click", () => {
    twoSixPopUp.style.visibility = "hidden";
    gameOn = true;
});



// Reset the game

function reset() {
    playerTurn = 1;
    player1TotalScore = 0;
    player1CurrentScore = 0;
    player2TotalScore = 0;
    player2CurrentScore = 0;
    gameOn = true;
    player1TotalScoreDisp.innerText = player1TotalScore;
    player2TotalScoreDisp.innerText = player2TotalScore;
    player1CurrentScoreDisp.innerText = player1CurrentScore;
    player2CurrentScoreDisp.innerText = player2CurrentScore;
    player1.classList.remove("player-win");
    player1EndMsg.style.visibility = "hidden";
    player2.classList.remove("player-win");
    player2EndMsg.style.visibility = "hidden";
    player1EndMsg.innerText = "";
    player2EndMsg.innerText = "";
}

// Switches turn

function playTurn() {
    if (playerTurn === 2) {
        player1.style.background = "#189b9b";
        player2.style.background = "#127a7a";
        playerTurn = 1;
    } else {
        player1.style.background = "#127a7a";
        player2.style.background = "#189b9b";
        playerTurn = 2;
    }
    switchAudio.play();
}

// Updates scores and display

function updateScores() {
    player1TotalScore += player1CurrentScore;
    player2TotalScore += player2CurrentScore;
    player1TotalScoreDisp.innerText = player1TotalScore;
    player2TotalScoreDisp.innerText = player2TotalScore;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    player1CurrentScoreDisp.innerText = player1CurrentScore;
    player2CurrentScoreDisp.innerText = player2CurrentScore;
}


function checkAndAnnounceWinner() {
    if (player1TotalScore === targetScore || player2TotalScore > targetScore) {
        winAudio.play();
        player1.classList.toggle("player-win");
        player1EndMsg.style.visibility = "visible";
        player1EndMsg.innerText = "You have Won";
        player1TotalWins += 1;
        player1TotalWinsDisp.innerText = player1TotalWins;
        player2EndMsg.style.visibility = "visible";
        player2EndMsg.innerText = "Passed the target score";
        gameOn = false;
    }
    if (player2TotalScore === targetScore || player1TotalScore > targetScore) {
        winAudio.play();
        player2.classList.toggle("player-win");
        player2EndMsg.style.visibility = "visible";
        player2EndMsg.innerText = "You have Won";
        player2TotalWins += 1;
        player2TotalWinsDisp.innerText = player2TotalWins;
        player1EndMsg.style.visibility = "visible";
        player1EndMsg.innerText = "Passed the target score";
        gameOn = false;
    }
}

// Roll between 1 to 6.

function generateRandomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}


function roll() {
    dice1Value = generateRandomDiceNumber();
    dice1.style.backgroundImage = `url(../Img/dice-${dice1Value}.png)`;
    dice2Value = generateRandomDiceNumber();
    dice2.style.backgroundImage = `url(../Img/dice-${dice2Value}.png)`;
    diceSum = dice1Value + dice2Value;
    if (diceSum === 12) {
        if (playerTurn === 1) {
            player1CurrentScore = 0;
            twoSixPopUpMsg.innerText = "Player 1, you have lost all your round point.";
        } else {
            player2CurrentScore = 0;
            twoSixPopUpMsg.innerText =
                "Player 2, you have lost all your round's points.";
        }

        holdButton.click();
        popupAudio.play();
        twoSixPopUp.style.visibility = "visible";
        gameOn = false;
    } else {
        if (playerTurn === 1) {
            player1CurrentScore += diceSum;
        } else {
            player2CurrentScore += diceSum;
        }
    }

    player1CurrentScoreDisp.innerText = player1CurrentScore;
    player2CurrentScoreDisp.innerText = player2CurrentScore;
}





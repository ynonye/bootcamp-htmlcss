const player0E1 = document.querySelector('.player_0');
const player1E1 = document.querySelector('.player_1');


const score0E1 = document.getElementById('score_1');
const score0E2 = document.getElementById('score_2');
const diceE1 = document.querySelector('.dice');

const current01 = document.getElementById('current_0')
const current02 = document.getElementById('current_1')

// Buttons

const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');
const btnNew = document.querySelector('.btn_new');


let scores, cuurentScore, activePlayer, playGame;


btnRoll.addEventListener("click", function () {
    if(playGame) {
        diceE1.classList.remove('hidden')
    }
    dice.classList.remove("hidden");

const init = function () {
    score01.textContent = 0;
    score02.textContent = 0;
    dice.classList.add('hidden');

    let scores = [0, 0];
    let activePlayer = 0;    
    let cuurentScore =  0;  
    let playGame = true; 

    current0E1.textContent = 0;
    current1E1.textContent = 0;

    
    
    diceE1.classList.add('hidden');
    player0E1.classList.remove('player_winner');
    player1E1.classList.remove('player_winner');
    player0E1.classList.add('player_active');
    player1E1.classList.remove('player_active');


}

init();


// genrate the random number

    const dice = Math.floor(Math.random()*6) + 1;
   
    diceE1.scr = `.img//dice_faces-$(dice).png`;

    if(dice !==1) {
        cuurentScore += dice;
//current01.textContent = cuurentScore;
        document.getElementById(`current_${activePlayer}`).textContent = cuurentScore;
    }else {
        document.getElementById(`current_${activePlayer}`).textContent = 0; 
        activePlayer = activePlayer === 0 ? 1 : 0;
        cuurentScore = 0;
        player0E1.classList.toggle("player_active");
        player1E1.classList.toggle("player_active");

    }
});

// The hold event

btnHold.addEventListener('click', function() {
    if (playGame) {scores[activePlayer] += cuurentScore;
        document.getElementById(`score_$(activePlayer)`).textContent = scores[activePlayer];
    }
    
    
//    scores[activePlayer] += cuurentScore; 
    
    if (scores[activePlayer] >= 100) {
        playGame = false;
        document.querySelector(`.player_${activePlayer}`).classList.add("player_winner");
        document.querySelector(`.player_${activePlayer}`).classList.add("player_active");
        diceE1.classList.add("hidden");
    }else {
        switchPlayer();

    }
});

btnNew.addEventListener('click', ) 










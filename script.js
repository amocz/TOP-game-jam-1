let scoreboard = document.querySelector('.scoreboard');
let timer = document.querySelector('.timer');
let startButton = document.querySelector('.start');
let container = document.querySelector('#container');
createHoles(6);
let holes = document.querySelectorAll('.hole');
let moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let moleTimeOut;
let gameTimeOut;
let score = 0;
let time = 10; //10s game
startButton.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', whack));

function createHoles(num){
    for(let i=0; i<num; i++){
        let hole = document.createElement('div');
        let holeClass = 'hole' + i;
        hole.classList.add('hole', holeClass);
        let mole = document.createElement('div');
        mole.classList.add('mole');
        hole.appendChild(mole);
        container.appendChild(hole);
    }
}

function setRandomTime(min, max){
    return Math.round(Math.random() * (max-min) + min);
}

function setRandomHole(){
    let index = Math.floor(Math.random() * holes.length);
    let hole = holes[index];
    if (hole !== lastHole){
        lastHole = hole;
        return hole;
    }
    return setRandomHole();
}

// set random keypress letter in key code (65-90)
function setRandomLetter(){
    return Math.floor(Math.random() * (91 - 65) + min);
}

function molesPoppingUp() {
    let time = setRandomTime(1000, 2000);
    let hole = setRandomHole();
    hole.classList.add('up');
    moleTimeOut = setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            molesPoppingUp();
        }
    }, time);
}

function startGame() {
    if (moleTimeOut){
        clearTimeout(moleTimeOut);
    }
    if (gameTimeOut) {
        clearTimeout(gameTimeOut);
    }
    timeUp = false;
    score = 0;
    scoreboard.textContent = `Score: ${score}`;
    countDown();
    molesPoppingUp();
    gameTimeOut = setTimeout(() => endGame(), 10000);
}

function endGame() {
    timeUp = true;
}

function whack(e){
    if (!e.isTrusted) return; //Check if player cheated
    score++;
    this.parentNode.classList.remove('up');
    scoreboard.textContent = `Score: ${score}`;
}

function countDown(){
    let timeLeft = time;
    let countDownTimer = setInterval(function(){
        timeLeft--;
        timer.textContent = `Timer: ${timeLeft}`;
        if (timeLeft <= 0)
            clearInterval(countDownTimer);
    }, 1000);
}
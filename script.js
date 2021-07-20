let scoreboard = document.querySelector('.scoreboard');
let timer = document.querySelector('.timer');
let startButton = document.querySelector('.start');
let container = document.querySelector('#container');
createHoles(6);
let holes = document.querySelectorAll('.hole');
let moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let difficulty = 'easy';
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
        let word = document.createElement('div');
        mole.classList.add('mole');
        word.classList.add('word');
        hole.appendChild(mole);
        container.appendChild(hole);
        container.appendChild(word);
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
    let word = hole;
    hole.classList.add('up');
    //word.textContent = chooseWord(difficulty)
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

function chooseWord(diff){
    if (dif == 'easy') {
        li = ['all', 'and', 'act', 'ago', 'add', 'aid', 'age', 'tag', 'cat', 'dog', 'cap', 'car', 'rag', 'leg', 'arm', 'bed', 'red', 
        'pan', 'fat', 'rat', 'bat', 'wit', 'pig', 'bee', 'web', 'rug', 'mug', 'nod', 'hen', 'mad', 'pad', 'dad', 'mom', 'vet', 'wet', 
        'pat', 'pay', 'fit', 'log', 'run', 'hit', 'rad', 'man', 'fed', 'led', 'fun', 'ton', 'pen', 'rod', 'mod', 'fall', 'pond', 'duck', 
        'long', 'kite', 'girl', 'male', 'tail', 'wall', 'tall', 'mall', 'star', 'leaf', 'book', 'bird', 'took', 'toll', 'mole', 'rail', 
        'bell', 'well', 'drum', 'plum', 'hand', 'feet', 'pace', 'made', 'mage', 'wage', 'nail', 'mama', 'papa', 'wack', 'malt', 'navy', 
        'near', 'neat', 'need', 'pass', 'part', 'ruby', 'runt', 'rank', 'raft', 'quiz', 'quit', 'wilt', 'tilt', 'ramp', 'rage'];
    } else if (dif == 'medium') {
        li =  ['fall', 'pond', 'duck', 'long', 'kite', 'girl', 'male', 'tail', 'wall', 'tall', 'mall', 'star', 'leaf', 'book', 'bird', 
        'took', 'toll', 'mole', 'rail', 'bell', 'well', 'drum', 'plum', 'hand', 'feet', 'pace', 'made', 'mage', 'wage', 'nail', 'mama', 
        'papa', 'wack', 'malt', 'navy', 'near', 'neat', 'need', 'pass', 'part', 'ruby', 'runt', 'rank', 'raft', 'quiz', 'quit', 'wilt', 
        'tilt', 'ramp', 'rage', 'address', 'earth', 'exercise', 'experience', 'experiment', 'notice', 'naughty', 'business', 'favorite', 
        'actually', 'group', 'guard', 'guide', 'particular', 'surprise', 'suppose', 'strength', 'fruit', 'occasionally', 'straight', 'recent', 
        'questions', 'quarter', 'purpose', 'promise', 'probably', 'pressure', 'length', 'library', 'difficult', 'important', 'imagine', 'possible', 
        'potatoes', 'woman', 'throughout', 'thought', 'through', 'various', 'therefore', 'decide', 'describe', 'complete', 'circle', 'century', 
        'centre', 'busy', 'worried', 'decision', 'incriminated'];
    } else if (dif == 'hard') {
        li =  ['address', 'earth', 'exercise', 'experience', 'experiment', 'notice', 'naughty', 'business', 'favorite', 'actually', 'group', 'guard', 
        'guide', 'particular', 'surprise', 'suppose', 'strength', 'fruit', 'occasionally', 'straight', 'recent', 'questions', 'quarter', 'purpose', 'promise', 
        'probably', 'pressure', 'length', 'library', 'difficult', 'important', 'imagine', 'possible', 'potatoes', 'woman', 'throughout', 'thought', 'through', 
        'various', 'therefore', 'decide', 'describe', 'complete', 'circle', 'century', 'centre', 'busy', 'worried', 'decision', 'incriminated', 'depth', 'forgetting', 
        'entire', 'horizon', 'fright', 'muscle', 'environment', 'controversy', 'awkward', 'vulnerable', 'deterrent', 'cameos', 'malicious', 'obscure', 'propeller', 
        'surmise', 'annoyance', 'vessel', 'insufficient', 'protein', 'unbelievable', 'unduly', 'applicant', 'machinery', 'laboratory', 'escalator', 'embargo', 'outrageous', 
        'honorary', 'minimize', 'contrary', 'vertigo', 'malady', 'rectangular', 'privilege', 'shuddering', 'precipitate', 'internally', 'perceived', 'mercenary', 'arrangement', 
        'vivacious', 'vacillate', 'phenomenon', 'potpourri', 'caricature', 'surveillance', 'metamorphosis', 'omnipotent', 'unenforceable'];
    }

    let wordPos = Math.floor(Math.random() * 100);
    return li[wordPos];
}
/*let scoreboard = document.querySelector('.scoreboard');
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
*/

var scoreboard;
var timer;




let musicCheck = false;



let startButton = document.querySelector('.start');
let container = document.querySelector('#container');
let pre_container = document.querySelector('.pre_container');
let mainBody = document.querySelector('.body');
let inp_container = document.querySelector('#container_inp');
let musicButton = document.querySelector('#audioButton');
let sfxButton = document.querySelector('#audioButton2');
let backgroundMusic = document.querySelector('#backmusic');

musicButton.addEventListener('click', () =>{
    if(!musicCheck){
        backgroundMusic.volume = 0.5;
            backgroundMusic.play();
    musicButton.textContent = "Background Music: On";
    musicCheck = true;
    musicButton.style.backgroundColor = "green";
    }

    else{
        backgroundMusic.pause();
    musicButton.textContent = "Background Music: Off";
    musicCheck = false;
    musicButton.style.backgroundColor = "red";
    }


})

sfxButton.addEventListener('click', () =>{
    if(!sfxCheck){


    sfxButton.textContent = "SFX: On";
    sfxCheck = true;
    sfxButton.style.backgroundColor = "green";
    }

    else{


    sfxButton.textContent = "SFX: Off";
    sfxCheck = false;
    sfxButton.style.backgroundColor = "red";
    }
    })

function createScore(){
    scoreboard = document.createElement('h2');
    scoreboard.classList.add("scoreboard");
    scoreboard.textContent = "Score:";
    pre_container.appendChild(scoreboard);
}


function createTimer(){
    timer = document.createElement('h2');
    timer.classList.add("timer");
    timer.textContent = "Timer:";
    pre_container.appendChild(timer);
}



let holes;
let moles;
let lastHole;
let timeUp;
let moleTimeOut;
let gameTimeOut;
let score;
let time;
//let difficulty = 'easy';
let wordCheck;

//startButton.addEventListener('click', startGame);


function createHoles(num){
    for(let i=0; i<num; i++){
        let hole = document.createElement('div');
        let holeClass = 'hole' + i;
        hole.classList.add('hole', holeClass);
        let mole = document.createElement('div');
        let word = document.createElement('div');
        mole.classList.add('mole');
        word.classList.add('word');
       // mole.appendChild(word);
        hole.appendChild(mole);
        //hole.appendChild(word);
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
    let time = setRandomTime(3000, 4000);
    let hole = setRandomHole();
    let word = hole.nextElementSibling;
    hole.classList.add('up');
    if(sfxCheck){
    let audio = document.getElementById('mole');
    audio.play();}
    moles.forEach(mole => mole.style.backgroundImage = 'url("../TOP-game-jam-1/assets/mole_coin.png")');
    
    //word.classList.add('up');
    word.textContent = chooseWord(difficulty)
    console.log("this is word.textContent:" , word.textContent);
    wordCheck = word.textContent;
    word.style.backgroundColor = 'white';
    word.style.borderColor = "black";

    console.log("this is wordCheck:" , wordCheck);
    console.log(word.textContent)
    moleTimeOut = setTimeout(() => {
        hole.classList.remove('up');
        word.textContent = '';
        word.style.backgroundColor = "transparent";

        var inputString = document.querySelector('INPUT');
        inputString.value = '';
        if (!timeUp) {
            molesPoppingUp();
        }
    }, time);

}

function startGame() {

        //Removing previous game state (regardless of whether there was a gamestate running prior)
        container.remove();
        pre_container.remove();
        inp_container.remove();

        //Creating new game state
        pre_container = document.createElement("div");
        pre_container.classList.add("pre_container");
        document.body.appendChild(pre_container);

        //Creating new scores
        container = document.createElement("div");
        container.setAttribute('id','container');
        document.body.appendChild(container);

        inp_container = document.createElement("div");
        inp_container.setAttribute('id','container_inp');

        document.body.appendChild(inp_container);


    createHoles(6);
    var inp = document.createElement("INPUT");
    //inp.setAttribute("value", "Hello World!");
    inp.setAttribute('placeholder', 'Type the words here...')
    inp.style.backgroundColor = "#1f5514";
    inp.style.borderColor = "#1f5514";
    inp.style.color = "#cdc673";
    inp_container.appendChild(inp);

holes = document.querySelectorAll('.hole');
moles = document.querySelectorAll('.mole');
words = document.querySelectorAll('.word');
 lastHole;
timeUp = false;
 moleTimeOut;
 gameTimeOut;
 score = 0;
time = 60; //10s game
//moles.forEach(mole => mole.addEventListener('click', whack));

    createScore();
    createTimer();
    if (moleTimeOut){
        clearTimeout(moleTimeOut);
    }
    if (gameTimeOut) {
        clearTimeout(gameTimeOut);
    }
    timeUp = false;
    score = 0;
    scoreboard.textContent = `Coins: ${score}`;
    countDown();
    molesPoppingUp();
    gameTimeOut = setTimeout(() => endGame(), 60000);
    inp.addEventListener('keyup', () => {
        //console.log("TEST NOW");
        var userInp = inp.value;
        console.log("This is user input: " , userInp);

        if (userInp == wordCheck){
            if(sfxCheck){
            let audio = document.getElementById('score');
    audio.play();
    let audio2 = document.getElementById('whack');
    audio2.play();}
            moles.forEach(mole => mole.style.backgroundImage = 'url("../TOP-game-jam-1/assets/mole_whack.png")');
            setTimeout(function () {
   moles.forEach(mole => mole.parentNode.classList.remove('up'));
}, 75)
           
            words.forEach(word => word.textContent = '');
            words.forEach(word => word.style.backgroundColor = 'transparent');
            score++;
            scoreboard.textContent = `Coins: ${score}`;
            inp.value = "";
        }
    })
}

function endGame() {
    timeUp = true;

    container.remove();
    inp_container.remove();
    pre_container.remove();

    container = document.createElement("div");
    container.setAttribute('id','container_after_score');
    document.body.appendChild(container);

    let container_after_buttons = document.createElement("div");
    container_after_buttons.setAttribute('id','container_after_buttons');
    document.body.appendChild(container_after_buttons);     

    let restart_button = document.createElement("button");
    restart_button.textContent = "Play Again";
    restart_button.classList.add("restart_button");
    container_after_buttons.appendChild(restart_button); 

    let reset_button = document.createElement("button");
    reset_button.textContent = "Main Menu";
    reset_button.classList.add("reset_button");
    container.appendChild(scoreboard);
    container_after_buttons.appendChild(reset_button);

    restart_button.addEventListener("click",()=>{
        if(sfxCheck){
        let audio = document.getElementById('button');
    audio.play();}
    console.log("clicked restart button");
    container.remove();
    container_after_buttons.remove();
    pre_container.remove();
    inp_container.remove();
    reset_button.remove();
    restart_button.remove();
    startGame();
});
    


    //give reset button functionality
    //Remove the newly created div (game scene) and remove itself
    //Bring back the original start game button and its div
    reset_button.addEventListener("click",()=>{
        if(sfxCheck){
        let audio = document.getElementById('button');
    audio.play();}
    console.log("clicked reset button");
    container.remove();
    container_after_buttons.remove();
    pre_container.remove();
    inp_container.remove();
    reset_button.remove();
start_game_area.disabled = "false";
start_game_area.style.display = "block";
how_to_play.disabled = "false";
how_to_play.style.display = "block";
chooseDifficulty.disabled = "false";
chooseDifficulty.style.display = "block";
easyButton.style.display = "block";
mediumButton.style.display = "block";
hardButton.style.display = "block";
});
}

function whack(e){
    if (!e.isTrusted) return; //Check if player cheated
    score++;
    this.parentNode.classList.remove('up');
    scoreboard.textContent = `Coins: ${score}`;
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
    if (diff == 'easy') {
        li = ['all', 'and', 'act', 'ago', 'add', 'aid', 'age', 'tag', 'cat', 'dog', 'cap', 'car', 'rag', 'leg', 'arm', 'bed', 'red',
        'pan', 'fat', 'rat', 'bat', 'wit', 'pig', 'bee', 'web', 'rug', 'mug', 'nod', 'hen', 'mad', 'pad', 'dad', 'mom', 'vet', 'wet',
        'pat', 'pay', 'fit', 'log', 'run', 'hit', 'rad', 'man', 'fed', 'led', 'fun', 'ton', 'pen', 'rod', 'mod', 'fall', 'pond', 'duck',
        'long', 'kite', 'girl', 'male', 'tail', 'wall', 'tall', 'mall', 'star', 'leaf', 'book', 'bird', 'took', 'toll', 'mole', 'rail',
        'bell', 'well', 'drum', 'plum', 'hand', 'feet', 'pace', 'made', 'mage', 'wage', 'nail', 'mama', 'papa', 'wack', 'malt', 'navy',
        'near', 'neat', 'need', 'pass', 'part', 'ruby', 'runt', 'rank', 'raft', 'quiz', 'quit', 'wilt', 'tilt', 'ramp', 'rage'];
    } else if (diff == 'medium') {
        li =  ['fall', 'pond', 'duck', 'long', 'kite', 'girl', 'male', 'tail', 'wall', 'tall', 'mall', 'star', 'leaf', 'book', 'bird',
        'took', 'toll', 'mole', 'rail', 'bell', 'well', 'drum', 'plum', 'hand', 'feet', 'pace', 'made', 'mage', 'wage', 'nail', 'mama',
        'papa', 'wack', 'malt', 'navy', 'near', 'neat', 'need', 'pass', 'part', 'ruby', 'runt', 'rank', 'raft', 'quiz', 'quit', 'wilt',
        'tilt', 'ramp', 'rage', 'address', 'earth', 'exercise', 'experience', 'experiment', 'notice', 'naughty', 'business', 'favorite',
        'actually', 'group', 'guard', 'guide', 'particular', 'surprise', 'suppose', 'strength', 'fruit', 'occasionally', 'straight', 'recent',
        'questions', 'quarter', 'purpose', 'promise', 'probably', 'pressure', 'length', 'library', 'difficult', 'important', 'imagine', 'possible',
        'potatoes', 'woman', 'throughout', 'thought', 'through', 'various', 'therefore', 'decide', 'describe', 'complete', 'circle', 'century',
        'centre', 'busy', 'worried', 'decision', 'incriminated'];
    } else if (diff == 'hard') {
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

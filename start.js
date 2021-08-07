const start_game_area = document.querySelector('.start_game');
const start_game_button = document.querySelector('#start_button');
const how_to_play = document.querySelector('.how_to');
const how_to_button = document.querySelector('#how_toButton')

const easy_ = document.querySelector('.easy');
const easyButton = document.querySelector('#easy_button')
const medium_ = document.querySelector('.medium');
const mediumButton = document.querySelector('#medium_button')
const hard_ = document.querySelector('.hard');
const hardButton = document.querySelector('#hard_button')
let sfxCheck = true;



//let pre_container = document.querySelector('.pre_container');


//testing hover capabilites through dom, can just do csss instead
//start_game_button.addEventListener("mouseenter",() =>{
//    start_game_button.style.backgroundColor = "Yellow";
//    start_game_button.style.color = "#ff6b63";
//});

//start_game_button.addEventListener("mouseleave",() =>{
//    start_game_button.style.backgroundColor = "#ff6b63";
//    start_game_button.style.color = "white";
//});

let difficulty = "easy";
easyButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button.png')";
    easyButton.style.backgroundSize = "contain";
    easyButton.style.backgroundPosition = "center";
    easyButton.style.backgroundRepeat = "no-repeat";


easyButton.addEventListener("mouseenter",() =>{
    if(difficulty != "easy"){
    easyButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button_hover.png')";
    easyButton.style.backgroundSize = "contain";
    easyButton.style.backgroundPosition = "center";
    easyButton.style.backgroundRepeat = "no-repeat";
    }
});

    easyButton.addEventListener("mouseleave",() =>{
    if(difficulty != "easy"){
    easyButton.style.background = "transparent";
    easyButton.style.color = "black";}
});


    mediumButton.addEventListener("mouseenter",() =>{
    if(difficulty != "medium"){
    mediumButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button_hover.png')";
    mediumButton.style.backgroundSize = "contain";
    mediumButton.style.backgroundPosition = "center";
    mediumButton.style.backgroundRepeat = "no-repeat";}
});

    mediumButton.addEventListener("mouseleave",() =>{
    if(difficulty != "medium"){
    mediumButton.style.background = "transparent";
    mediumButton.style.color = "black";}
});

    hardButton.addEventListener("mouseenter",() =>{
    if(difficulty != "hard"){
    hardButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button_hover.png')";
    hardButton.style.backgroundSize = "contain";
    hardButton.style.backgroundPosition = "center";
    hardButton.style.backgroundRepeat = "no-repeat";}
});

    hardButton.addEventListener("mouseleave",() =>{
    if(difficulty != "hard"){
    hardButton.style.background = "transparent";
    hardButton.style.color = "black";}
});


easyButton.addEventListener("click",() =>{
    difficulty = "easy";
    if(sfxCheck){
    let audio = document.getElementById('button');
    audio.play();}
    easyButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button.png')";
    easyButton.style.backgroundSize = "contain";
    easyButton.style.backgroundPosition = "center";
    easyButton.style.backgroundRepeat = "no-repeat";
    mediumButton.style.color = "black";
    hardButton.style.color = "black";
    mediumButton.style.borderColor = "transparent";
    mediumButton.style.backgroundColor = "transparent";
    hardButton.style.borderColor = "transparent";
    hardButton.style.backgroundColor = "transparent";
    mediumButton.style.background = "transparent";
    hardButton.style.background = "transparent";

    



    /*background-color: #cdc673;
    border-color: #cdc673;
    border-radius: 20%;*/
});

mediumButton.addEventListener("click",() =>{
    difficulty = "medium";
    if(sfxCheck){
    let audio = document.getElementById('button');
    audio.play();}
    easyButton.style.color = "black";
    mediumButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button.png')";
    mediumButton.style.backgroundSize = "contain";
    mediumButton.style.backgroundPosition = "center";
    mediumButton.style.backgroundRepeat = "no-repeat";
    hardButton.style.color = "black";
    easyButton.style.borderColor = "transparent";
    easyButton.style.backgroundColor = "transparent";
    hardButton.style.borderColor = "transparent";
    hardButton.style.backgroundColor = "transparent";
    easyButton.style.background = "transparent";
    hardButton.style.background = "transparent";


});

hardButton.addEventListener("click",() =>{
    difficulty = "hard";
    if(sfxCheck){
    let audio = document.getElementById('button');
    audio.play();}
    hardButton.style.backgroundImage = "url('../TOP-game-jam-1/assets/button.png')";
    hardButton.style.backgroundSize = "contain";
    hardButton.style.backgroundPosition = "center";
    hardButton.style.backgroundRepeat = "no-repeat";
    easyButton.style.color = "black";
    mediumButton.style.color = "black";

    easyButton.style.borderColor = "transparent";
    easyButton.style.backgroundColor = "transparent";
    mediumButton.style.borderColor = "transparent";
    mediumButton.style.backgroundColor = "transparent";
    mediumButton.style.background = "transparent";
    easyButton.style.background = "transparent";


    
});


how_to_button.addEventListener("click",() =>{
    if(sfxCheck){
let audio = document.getElementById('button');
    audio.play();}
    //Hide the intial start game button and disable that div
    start_game_area.disabled = "true";
    start_game_area.style.display = "none";
    how_to_play.disabled = "true";
  how_to_play.style.display = "none";
    easyButton.style.display = "none";
    mediumButton.style.display = "none";
    hardButton.style.display = "none";
    chooseDifficulty.disabled = "true";
chooseDifficulty.style.display = "none";
    console.log("I clciked");
    //Now create a new div where I have a line of text for example (will be replaced by a game scene maybe?)
    //Then create a reset button
let how_to_play_area = document.createElement("div");
how_to_play_area.classList.add("how_to_play_area");

let how_to_play_text = document.createElement("h4");
how_to_play_text.textContent = "Periodically, moles are going to pop out from holes on the ground. These moles have a corresponding word attached to themm. They also have coins on top of their heads.";
let mole_example = document.createElement("div");
mole_example.classList.add("mole_example");


let how_to_play_text1 = document.createElement("h4");
how_to_play_text1.textContent = "To collect thse coins, type the word associated with the mole in the input area before the mole gets away";
let input_example = document.createElement("div");
input_example.classList.add("input_example");

let back_button = document.createElement("button");
    back_button.textContent = "Back";
    back_button.classList.add("back_button");

back_button.addEventListener("click",()=>{
    if(sfxCheck){
        let audio = document.getElementById('button');
    audio.play();}
    console.log("clicked reset button");
    how_to_play_area.remove();

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

how_to_play_area.appendChild (how_to_play_text);
how_to_play_area.appendChild (mole_example);
how_to_play_area.appendChild (how_to_play_text1);
how_to_play_area.appendChild (input_example);

how_to_play_area.appendChild (back_button);
document.body.appendChild (how_to_play_area);
});



start_game_button.addEventListener("click",() =>{
    if(sfxCheck){
let audio = document.getElementById('button');
    audio.play();}
    //Hide the intial start game button and disable that div
    start_game_area.disabled = "true";
    start_game_area.style.display = "none";
    how_to_play.disabled = "true";
    how_to_play.style.display = "none";
    chooseDifficulty.disabled = "true";
    chooseDifficulty.style.display = "none";
    easyButton.style.display = "none";
    mediumButton.style.display = "none";
    hardButton.style.display = "none";
    console.log("I clciked");

    //Now create a new div where I have a line of text for example (will be replaced by a game scene maybe?)
    //Then create a reset button
startGame();
//reset_button = document.createElement("button");
//reset_button.textContent = "back to Main Menu";
//reset_button.classList.add("reset_button");
//pre_container.appendChild(reset_button);

    //give reset button functionality
    //Remove the newly created div (game scene) and remove itself
    //Bring back the original start game button and its div
/*reset_button.addEventListener("click",()=>{
    console.log("clicked reset button");
    div_head.remove();
    reset_button.remove();
start_game_area.disabled = "false";
start_game_area.style.display = "block";
how_to_play.disabled = "false";
how_to_play.style.display = "block";
});*/
});



//Game difficulty, 3 options change paramater with reset_button
//Difficulty of words
//let randomSet = [];
//let easySet = [];
//let mediumSet = [];
//let hardSet = [];

//function gameDifficulty(difficulty) {
    //if (difficulty === 0 || difficulty === 2) {
        //randomSet.concat(mediumSet)
    //} else if (difficulty === 1) {
        //randomSet.concat(easySet)
    //} else if (difficulty === 3) {
        //randomSet.concat(hardSet)
    //}
//}

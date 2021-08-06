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

easyButton.addEventListener("click",() =>{
    difficulty = "easy";
    easyButton.style.borderColor = "brown";
    mediumButton.style.borderColor = "white";
    hardButton.style.vColor = "white";
})

mediumButton.addEventListener("click",() =>{
    difficulty = "medium";
    easyButton.style.borderColor = "white";
    mediumButton.style.borderColor = "brown";
    hardButton.style.borderColor = "white";

})

hardButton.addEventListener("click",() =>{
    difficulty = "hard";
    easyButton.style.borderColor = "white";
    mediumButton.style.borderColor = "white";
    hardButton.style.borderColor = "brown";
})





start_game_button.addEventListener("click",() =>{

    //Hide the intial start game button and disable that div
    start_game_area.disabled = "true";
    start_game_area.style.display = "none";
    how_to_play.disabled = "true";
    how_to_play.style.display = "none";
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

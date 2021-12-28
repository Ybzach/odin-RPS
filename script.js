function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(e) {
    const playerSelection = (e.target.innerText).toLowerCase();
    const computerSelection = computerPlay();
    
    console.log(playerSelection);
    console.log(computerSelection);

    updateMove(playerSelection, computerSelection);
    if (playerSelection === "rock"){
        if (computerSelection === "scissors") {
            return "player";
        } else if (computerSelection === "paper"){
            return "CPU";
        } else return "tie";
    }else if (playerSelection === "paper"){
        if (computerSelection === "rock") {
            return "player";
        } else if (computerSelection === "scissors"){
            return "CPU";
        } else return "tie";
    }else if (playerSelection === "scissors"){
        if (computerSelection === "paper") {
            return "player";
        } else if (computerSelection === "rock"){
            return "CPU";
        } else return "tie";
    }
}

function updateCounter(e){
    const winner = playRound(e);
    const playerScoreDiv = document.getElementById("player-score");
    const CPUScoreDiv = document.getElementById("CPU-score");
    let playerScore = parseInt(playerScoreDiv.innerText);
    let CPUScore = parseInt(CPUScoreDiv.innerText); 

    if (winner === "player"){
        playerScore++;
        playerScoreDiv.textContent = `${playerScore}`;
    } else if (winner === "CPU") {
        CPUScore++;
        CPUScoreDiv.textContent = `${CPUScore}`;
    }

    toggleChoiceSelection();
    updateGlow(winner);
    updateScore(playerScore,CPUScore);
}

function updateGlow(winner){
    const playerBox = document.getElementById("player");
    const CPUBox = document.getElementById("CPU");

    if (winner === "player"){
        playerBox.classList.remove("lose-glow");
        playerBox.classList.add("win-glow");

        CPUBox.classList.remove("win-glow");
        CPUBox.classList.add("lose-glow");
    } else if (winner === "CPU") {
        playerBox.classList.remove("win-glow");
        playerBox.classList.add("lose-glow");

        CPUBox.classList.remove("lose-glow");
        CPUBox.classList.add("win-glow");
    }else {
        resetGlow(playerBox,CPUBox);
    }
}

function resetGlow() {
    const playerBox = document.getElementById("player");
    const CPUBox = document.getElementById("CPU");

    playerBox.classList.remove("lose-glow");
    playerBox.classList.remove("win-glow");
    CPUBox.classList.remove("lose-glow");
    CPUBox.classList.remove("win-glow");
}

function updateScore(player,cpu) {
    const playerScore = document.getElementById("player-score");
    const CPUScore = document.getElementById("CPU-score");

    if (player > cpu) {
        playerScore.style.backgroundColor = "#20cc59";
        CPUScore.style.backgroundColor = "#eb3c3c";
    }else if (player < cpu) {
        playerScore.style.backgroundColor = "#eb3c3c";
        CPUScore.style.backgroundColor = "#20cc59";
    }else {
        resetScoreBG();
    }
}

function resetScoreBG(){
    const playerScore = document.getElementById("player-score");
    const CPUScore = document.getElementById("CPU-score");

    playerScore.style.backgroundColor = "darkgray";
    CPUScore.style.backgroundColor = "darkgray";
}

function updateMove(player,cpu){
    const CPUMove = document.getElementById("CPU-move");
    const playerMove = document.getElementById("player-move");

    CPUMove.textContent = capitalizeString(cpu);
    playerMove.textContent = capitalizeString(player);
}

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetScreen(){
    const moveSelection = document.getElementById("choice-buttons");
    const playerMove = document.getElementById("player-move");
    const CPUMove = document.getElementById("CPU-move");
    const continueSelection = document.getElementById("ask-box");

    moveSelection.classList.remove("hide");
    playerMove.classList.add("hide");
    CPUMove.classList.add("hide");
    continueSelection.classList.add("hide");
}

function toggleChoiceSelection() {
    const moveSelection = document.getElementById("choice-buttons");
    const playerMove = document.getElementById("player-move");
    const CPUMove = document.getElementById("CPU-move");
    const continueSelection = document.getElementById("ask-box");

    moveSelection.classList.toggle("hide");
    playerMove.classList.toggle("hide");
    CPUMove.classList.toggle("hide");
    continueSelection.classList.toggle("hide");
}

function reset() {
    resetScore();
    resetScreen();
    resetScoreBG();
    resetGlow();
}

function resetScore() {
    const playerScoreDiv = document.getElementById("player-score");
    const CPUScoreDiv = document.getElementById("CPU-score");

    playerScoreDiv.textContent = "0";
    CPUScoreDiv.textContent = "0";
}

function main(){
    const buttons = document.querySelectorAll("#choice-buttons button");
    const continueButton = document.getElementById("continue");
    const resetButton = document.getElementById("reset");
    
    resetScreen();
    continueButton.addEventListener("click", toggleChoiceSelection);
    resetButton.addEventListener("click", reset);
    buttons.forEach(button => button.addEventListener("click",updateCounter));
}
main();

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(e) {
    const playerSelection = (e.target.innerText).toLowerCase();
    const computerChoice = computerPlay();
    
    console.log(playerSelection);
    console.log(computerChoice);
    if (playerSelection === "rock"){
        if (computerChoice === "scissors") {
            return "player";
        } else if (computerChoice === "paper"){
            return "CPU";
        } else return "tie";
    }else if (playerSelection === "paper"){
        if (computerChoice === "rock") {
            return "player";
        } else if (computerChoice === "scissors"){
            return "CPU";
        } else return "tie";
    }else if (playerSelection === "scissors"){
        if (computerChoice === "paper") {
            return "player";
        } else if (computerChoice === "rock"){
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
}

function updateGlow(winner){

}

function main(){
    const buttons = document.querySelectorAll("#choice-buttons button");

    buttons.forEach(button => button.addEventListener("click",updateCounter));
}
main();
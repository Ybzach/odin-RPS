function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(player,CPU) {
    playerSelection = player.toLowerCase();

    if (playerSelection === "rock"){
        if (CPU === "scissors") {
            return "player";
        } else if (CPU === "paper"){
            return "CPU";
        } else return "tie";
    }else if (playerSelection === "paper"){
        if (CPU === "rock") {
            return "player";
        } else if (CPU === "scissors"){
            return "CPU";
        } else return "tie";
    }else if (playerSelection === "scissors"){
        if (CPU === "paper") {
            return "player";
        } else if (CPU === "rock"){
            return "CPU";
        } else return "tie";
    }
}

function results(winner, player, CPU){
    if (winner === "player") {
        alert(`You win! ${player} beats ${CPU}`);
    } else if (winner === "CPU") { 
        alert(`You lose! ${CPU} beats ${player}`);
    } else alert(`You tie! You both chose ${player}`);
} 

function game(){
    let playerScore = 0;
    let CPUScore = 0;
    for (let i = 0 ; i <5 ; i++){
        if (playerScore === 3 || CPUScore === 3){
            break;
        }
        let computerChoice = computerPlay();
        let playerChoice = window.prompt("What is your move?");
        let winner = playRound(playerChoice,computerChoice);
    
        results(winner, playerChoice, computerChoice);  
        
        if (winner === "player" ){
            playerScore++;
        }else if (winner === "CPU"){
            CPUScore++;
        }
    }

    if (playerScore > CPUScore) alert("Player wins!");
    else if (playerScore < CPUScore) alert("CPU wins!");
    else alert("The game is tied!");
}

game();
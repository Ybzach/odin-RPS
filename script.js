function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(e) {
    // playerSelection = player.toLowerCase();
    
    // if (playerSelection === "rock"){
    //     if (CPU === "scissors") {
    //         return "player";
    //     } else if (CPU === "paper"){
    //         return "CPU";
    //     } else return "tie";
    // }else if (playerSelection === "paper"){
    //     if (CPU === "rock") {
    //         return "player";
    //     } else if (CPU === "scissors"){
    //         return "CPU";
    //     } else return "tie";
    // }else if (playerSelection === "scissors"){
    //     if (CPU === "paper") {
    //         return "player";
    //     } else if (CPU === "rock"){
    //         return "CPU";
    //     } else return "tie";
    // }
}

function getMove(e) {
    const move = e.target.innerText;

}

function main(){
    const buttons = document.querySelectorAll("#choice-buttons button");
    const computerChoice = computerPlay();

    buttons.forEach(button => button.addEventListener("click",getMove));
}
main();
// game();
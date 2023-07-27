
const playingElements = ["rock", "paper", "scissors"]
function getComputerChoice(){
    let computerChoice = playingElements[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
        let playerSelection = prompt("Select an element");
        if (playerSelection == null){
            continue;
        }
        else if (playingElements.includes(playerSelection.toLowerCase())){
            return playerSelection;
        }
    }
}

function playRound(computerChoice, playerChoice){
    let result;
    if (playerChoice == computerChoice){
        result = "Tie";
    }
    else if((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        result = "Win";
    }
    else{
        result = "Lose";
    }
    return result;
}

function game(){
    console.log("Rock Paper Scissors Game");
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let result = playRound(computerChoice, playerChoice);
        if (result == "Tie"){
            console.log(`Round ${i}: Tie!`);
            playerScore += 1;
            computerScore +=1;
        }
        else if(result == "Win"){
            console.log(`Round ${i}: You ${result}! ${playerChoice} beats ${computerChoice}`);
            playerScore += 1;
        }
        else{
            console.log(`Round ${i}: You ${result}! ${computerChoice} beats ${playerChoice}`);
            computerScore +=1
        }
    }
    if (playerScore == computerScore){
        console.log("This game is a Tie !");
    }
    else if (playerScore > computerScore){
        console.log("You win this games !");
    }
    else{
        console.log("You lose this game !");
    }
}
game()
/*getComputerChoice*/
/*getPlayerChoice*/
/*printOutWinner*/

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            return "rock";
            break
        case 1:
            return "paper";
            break
        case 2:
            return "scissors";
            break
        default:
            return "ERROR";
    }
    return 0;
};

function updateScore(pScore, cScore){
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

function playRound(playerChoice, computerChoice, pScore, cScore){
    const winner = document.querySelector('.winner');
    if (playerChoice == computerChoice){
        winner.textContent = "Tie !";
        updateScore(pScore, cScore);
    }
    else if ((playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper")){
        winner.textContent = "You Win!";
        pScore += 1;
        updateScore(pScore, cScore);
    }
    else{
        winner.textContent = "Computer Wins!";
        cScore += 1;
        updateScore(pScore, cScore);
    }
}

function game(){
    //Score is buggy
    let pScore = 0;
    let cScore = 0;
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        options.forEach(option => {
            option.addEventListener('click', function(){
                //Get computer Choice
                const computerChoice = getComputerChoice();
                
                //Update scores (buggy)
                playRound(this.textContent, computerChoice, pScore, cScore);

                //Update Hands Images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`
            })
        })
        
    };
    startGame();
    playMatch();
};

game();

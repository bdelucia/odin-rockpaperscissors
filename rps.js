let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function getComputerChoice(){
    const randomInt = Math.floor(Math.random() * 3) + 1;
    if(randomInt === 3)
        return "Rock"
    else if(randomInt === 2)
        return "Paper"
    else if(randomInt === 1)
        return "Scissors"
    else
        return "How did I get here??"
}

function capitalizeFirstLetter(input) {
    if (input) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }
    return input;

}

function getHumanChoice(){
    var humanChoice = prompt("Rock, Paper, or Scissors?")
    humanChoice = capitalizeFirstLetter(humanChoice)
    while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors"){
        humanChoice = prompt("Invalid input. Please enter Rock, Paper, or Scissors")
        humanChoice = capitalizeFirstLetter(humanChoice)
    }
    return humanChoice
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === "Rock" && computerChoice === "Rock")
        resultsDiv.textContent = "Tie";
    if(humanChoice === "Paper" && computerChoice === "Paper")
        resultsDiv.textContent = "Tie"
    if(humanChoice === "Scissors" && computerChoice === "Scissors")
        resultsDiv.textContent = "Tie";

    if(humanChoice === "Rock" && computerChoice === "Paper")
    {
        computerScore++;
        resultsDiv.textContent = "CPU won that one";
    }
        
    if(humanChoice === "Scissors" && computerChoice === "Rock")
    {
        computerScore++;
        resultsDiv.textContent = "CPU won that one";
    }
        
    if(humanChoice === "Paper" && computerChoice === "Scissors")
    {
        computerScore++;
        resultsDiv.textContent = "CPU won that one";
    }
    if(humanChoice === "Rock" && computerChoice === "Scissors")
    {
        humanScore++;
        resultsDiv.textContent = "You won that one";
    }
    if(humanChoice === "Paper" && computerChoice === "Rock")
    {
        humanScore++;
        resultsDiv.textContent = "You won that one";
    }
    if(humanChoice === "Scissors" && computerChoice === "Paper")
    {
        humanScore++;
        resultsDiv.textContent = "You won that one";
    }

    return 0;
}

function playGame(humanChoice){
    //for(let i = 0; i < 5; i++){
        computerChoice = getComputerChoice()
        //humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    //}

    if(humanScore > computerScore)
        console.log(`Human wins with ${humanScore} wins, computer with ${computerScore} wins`)
    else if (computerScore > humanScore)
        console.log(`Computer wins with ${computerScore} wins, human with ${humanScore} wins`)
    else
        console.log("It was a tie.")
}

const buttons = document.querySelectorAll("button");
const humanScoreDiv = document.querySelector(".humanScore");
const cpuScoreDiv = document.querySelector(".cpuScore");
const gamesPlayedH3 = document.querySelector(".gamesPlayed");
const resultsDiv = document.querySelector(".results")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.textContent);
        gamesPlayed += 1;
        
        gamesPlayedH3.textContent = "Game " + gamesPlayed + "/5";
        humanScoreDiv.textContent = "You: " + humanScore;
        cpuScoreDiv.textContent = "CPU: " + computerScore;

        if (gamesPlayed === 5){
            if(humanScore > computerScore)
                resultsDiv.textContent = "You win!";
            if(computerScore > humanScore)
                resultsDiv.textContent = "CPU wins!";
            if(computerScore === humanScore)
                resultsDiv.textContent = "It would appear we have a tie."

            gamesPlayed = 0;
            humanScore = 0;
            computerScore = 0;
        }
    });
})
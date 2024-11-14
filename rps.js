let humanScore = 0;
let computerScore = 0;

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
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        console.log("Tie")
    }
    if(humanChoice === "Paper" && computerChoice === "Paper")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        console.log("Tie")
    }
    if(humanChoice === "Scissors" && computerChoice === "Scissors")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        console.log("Tie")
    }
    if(humanChoice === "Rock" && computerChoice === "Paper")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        computerScore++;
        console.log("Computer wins, paper beats rock")
    }
    if(humanChoice === "Scissors" && computerChoice === "Rock")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        computerScore++;
        console.log("Computer wins, rock beats scissors")
    }
    if(humanChoice === "Paper" && computerChoice === "Scissors")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        computerScore++;
        console.log("Computer wins, scissors beats paper")
    }
    if(humanChoice === "Rock" && computerChoice === "Scissors")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        humanScore++;
        console.log("You win, rock beats scissors")
    }
    if(humanChoice === "Paper" && computerChoice === "Rock")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        humanScore++;
        console.log("You win, paper beats rock")
    }
    if(humanChoice === "Scissors" && computerChoice === "Paper")
    {
        console.log(`You picked ${humanChoice}, CPU picked ${computerChoice}.`)
        humanScore++;
        console.log("You win, scissors beat paper")
    }

    return 0;
}

function playGame(){
    for(let i = 0; i < 5; i++){
        computerChoice = getComputerChoice()
        humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }

    if(humanScore > computerScore)
        console.log(`Human wins with ${humanScore} wins, computer with ${computerScore} wins`)
    else if (computerScore > humanScore)
        console.log(`Computer wins with ${computerScore} wins, human with ${humanScore} wins`)
    else
        console.log("It was a tie.")
}
playGame()
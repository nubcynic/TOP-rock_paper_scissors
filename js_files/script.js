console.log("Hey Cynic!"); // To check whether js file is linked to html

//-------------- TOP Foundations - Rock Paper Scissor ----------------
// ~~~~~~~ Step #1 Get computer choice

// Create function "getComputerChoice"
// Write code so that above function randomly returns "rock, paper or scissor"

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3) + 1;
    if (randomValue === 1) {
        return "rock";   
    } else if (randomValue === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

// ~~~~~~~~ Step #2 Get human choice

// Create function "getHumanChoice"
// Write code so that the function returns human choice between "rock, paper or scissor"

function getHumanChoice() {
    return prompt("Choose between Rock, Paper or Scissor. Choices are:\nrock\npaper\nscissor");
}

let humanChoice = getHumanChoice();
console.log(humanChoice);

// ~~~~~~~~ Step #3 Declare scores

// Create two variables "humanScore" and "computerScore" in the global scope
// Assign it a value of 0 initially
let humanScore = 0;
let computerScore = 0;

// ~~~~~~~~ Step #4 Play single round

// Create a function "playRound"
// Use two parameters "humanChoice" and "computerChoice" which takes both choices as arguments
// Make "humanChoice" parameter case insensitive
// Write the code so that the winner is printed based off both choices and game rules
// Increment the score based on whoever wins the round

function playRound(humanChoice, computerChoice) {
    let userChoice = humanChoice.toLowerCase();
    if (userChoice === computerChoice) {
        console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nIt's a Draw`);
    } else if (userChoice === "rock" && computerChoice === "scissor") {
        console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Win! ${userChoice} beats ${computerChoice}`);
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Win! ${userChoice} beats ${computerChoice}`);
    } else if (userChoice === "scissor" && computerChoice === "paper") {
        console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Win! ${userChoice} beats ${computerChoice}`);
    } else {
        console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Lose! ${computerChoice} beats ${userChoice}`);
    }
}
playRound(humanChoice, computerChoice);
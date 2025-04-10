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

getComputerChoice();
console.log(getComputerChoice());

// ~~~~~~~~ Step #2 Get human choice

// Create function "getHumanChoice"
// Write code so that the function returns human choice between "rock, paper or scissor"

function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper or Scissor. Choices are:\nrock\npaper\nscissor");
    console.log(humanChoice);
}

getHumanChoice();
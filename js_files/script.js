// ~~~~~~~ Step #1 Get computer choice

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3) + 1;
    if (randomValue === 1) {
        return "rock";   
    } else if (randomValue === 2) {
        return "paper";
    } else {
        return "scissor";
    }
};

// ~~~~~~~~ Step #2 Get human choice

// Reference to icons section which has images and buttons
const iconSection = document.querySelector(".icons-section");

// Reference to score list
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

// Reference to result list
const resultList = document.querySelector(".result-list");

// Reference to all buttons

const btnList = document.querySelectorAll("button");

// Create elements
const resultListItem = document.createElement("li");

// Initial score for both teams
let scoreRecordHuman = 0;
let scoreRecordComputer = 0;


// btnList is a NodeList => [btn1, btn2, btn3]; so add event listener for each item from the list
btnList.forEach(item => {
    item.addEventListener("click", (e) => {
        playRound(e.target.textContent, getComputerChoice());
    });
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultListItem.textContent = `${humanChoice.toUpperCase()} v/s ${computerChoice.toUpperCase()}! It is a Draw`;
        resultList.appendChild(resultListItem);
    } else if ((humanChoice === "rock" && computerChoice === "paper")
            || (humanChoice === "paper" && computerChoice === "scissor")
            || (humanChoice === "scissor" && computerChoice === "rock")
        ) {
            scoreRecordComputer++;
            computerScore.textContent = scoreRecordComputer;
            resultListItem.textContent = `${humanChoice.toUpperCase()} v/s ${computerChoice.toUpperCase()}! You Loose`;
            resultList.appendChild(resultListItem);
    } else {
        scoreRecordHuman++;
        humanScore.textContent = scoreRecordHuman;
        resultListItem.textContent = `${humanChoice.toUpperCase()} v/s ${computerChoice.toUpperCase()}! You Win`;
        resultList.appendChild(resultListItem);
    }

};








// // ~~~~~~~~ Step #3 Declare scores

// // Create two variables "humanScore" and "computerScore" in the global scope
// // Assign it a value of 0 initially
// let humanScore = 0;
// let computerScore = 0;
// let round = 0;

// // ~~~~~~~~ Step #4 Play single round

// // Create a function "playRound"
// // Use two parameters "humanChoice" and "computerChoice" which takes both choices as arguments
// // Make "humanChoice" parameter case insensitive
// // Write the code so that the winner is printed based off both choices and game rules
// // Increment the score based on whoever wins the round

// function playRound(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nIt's a Draw`);
//     } else if (userChoice === "rock" && computerChoice === "scissor") {
//         humanScore++;
//         console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Win! ${userChoice} beats ${computerChoice}`);
//     } else if (userChoice === "paper" && computerChoice === "rock") {
//         humanScore++;
//         console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Win! ${userChoice} beats ${computerChoice}`);
//     } else if (userChoice === "scissor" && computerChoice === "paper") {
//         humanScore++;
//         console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Win! ${userChoice} beats ${computerChoice}`);
//     } else {
//         computerScore++;
//         console.log(`Computer's choice: ${computerChoice}\nYour Choice: ${userChoice}\nYou Lose! ${computerChoice} beats ${userChoice}`);
//     }
// }

// // ~~~~~~~~~~~~ Step #5 Play the entire game

// // Create function "playGame"
// // Move "playRound" function and score variables inside
// // Play the rounds 5 times

// function playGame () {
//     while (round < 5) {
//         round++;
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`round no: ${round}\nYour score: ${humanScore}\nComputer Score : ${computerScore}`);
//     };
//     if (humanScore > computerScore) {
//         console.log(`WINNER!\nYou won ${humanScore} rounds out of ${round} rounds`);
//     } else if (computerScore > humanScore) {
//         console.log(`BETTER LUCK NEXT TIME!\nYou only won ${humanScore} rounds out of ${round} rounds`);
//     } else {
//         console.log(`ITS A TIE!\nYour score: ${humanScore}\nComputer's Score: ${computerScore}`);
//     }
// } 
    
// playGame();

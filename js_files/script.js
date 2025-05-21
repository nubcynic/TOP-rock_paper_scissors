// Get computer choice
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

// Reference to the main container of the html
const container = document.querySelector(".container");

// Reference to the parent element of rule button i.e. rule-container div
const ruleContainer = document.querySelector(".rule-container");

// Reference to the Rule Button
const ruleButton = document.querySelector(".rule-button");

// Action when rule button is clicked : remove h3, btn and rules list
ruleButton.addEventListener("click", () => {
    container.removeChild(ruleContainer);
});

// Reference to score list
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

// Reference to result list
const resultList = document.querySelector(".result-list");

// Reference to all buttons

const btnList = document.querySelectorAll(".btn");

// Create elements
const resultListItem = document.createElement("li");

// Initial score for both teams
let scoreRecordHuman = 0;
let scoreRecordComputer = 0;


// btnList is a NodeList => [btn1, btn2, btn3]; so add event listener for each item from the list
// e.target.textContent captures user choice
btnList.forEach(item => {
    item.addEventListener("click", (e) => {
        playRound(e.target.textContent, getComputerChoice());  
    });
});


// Everytime button is clicked, run this function 
function playRound(humanChoice, computerChoice) {
    // when any score reaches 5, alert
    if (scoreRecordComputer === 5 || scoreRecordHuman === 5) {
        if (scoreRecordComputer === 5) {
            alert("Game Ended. Better Luck Next Time!");
        }else {
            alert("Game Ended. You are the WINNER!");
        };
    } else if (humanChoice === computerChoice) {
        computerScore.textContent = scoreRecordComputer;
        humanScore.textContent = scoreRecordHuman;
        resultListItem.textContent = `${humanChoice.toUpperCase()} v/s ${computerChoice.toUpperCase()}! It is a Draw`;
        resultList.appendChild(resultListItem);
    } else if ((humanChoice === "rock" && computerChoice === "paper")
            || (humanChoice === "paper" && computerChoice === "scissor")
            || (humanChoice === "scissor" && computerChoice === "rock")
        ) {
            scoreRecordComputer++;          // add to the score
            computerScore.textContent = scoreRecordComputer;    // put the score in the page
            resultListItem.textContent = `${humanChoice.toUpperCase()} v/s ${computerChoice.toUpperCase()}! You Loose`;
            resultList.appendChild(resultListItem);
    } else {
        scoreRecordHuman++;
        humanScore.textContent = scoreRecordHuman;
        resultListItem.textContent = `${humanChoice.toUpperCase()} v/s ${computerChoice.toUpperCase()}! You Win`;
        resultList.appendChild(resultListItem);
    }

};




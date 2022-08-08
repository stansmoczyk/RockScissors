const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    if (randomNumber === 2){
        computerChoice = 'Paper'
    }
    if (randomNumber === 3){
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResults(){
    if (computerChoice === userChoice){
        result = "It's a tie!"
    }
    if (computerChoice === 'Rock' && userChoice === "Paper"){
        result = "You Win!"
    }
    if (computerChoice === 'Rock' && userChoice === "Scissors"){
        result = "You Lost!"
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper"){
        result = "You Lost!"
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock"){
        result = "You Win!"
    }
    if (computerChoice === 'Paper' && userChoice === "Rock"){
        result = "You Lost!"
    }
    if (computerChoice === 'Paper' && userChoice === "Scissors"){
        result = "You Win!"
    }
    resultDisplay.innerHTML = result
}
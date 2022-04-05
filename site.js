

const computerPlay = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
if (randomNumber === 0){
    return 'Rock';
}
else if (randomNumber === 1){
    return 'Paper';
}
else if (randomNumber === 2){
    return 'Scissors';
}
}
//console.log(computerPlay());



function playRound(playerSelection, computerSelection) {
    //my code
    console.log('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
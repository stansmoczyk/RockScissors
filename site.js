
//Random picker for computer to play
function computerPlay ()  {
    const randomNumber = (Math.floor(Math.random() * 3))
if (randomNumber === 0){
    return 'ROCK';
}
else if (randomNumber === 1){
    return 'PAPER';
}
else if (randomNumber === 2){
    return 'SCISSORS';
}
}


//Play game

function playRound() {
    // let computerWins = 0;
    // let playerWins = 0;

    for (let i =0; i <5; i++){
         
        //code to play 5 rounds here
        console.log(comparePlay());

    }
}
//Compares results from game
function comparePlay(){
    const playerSelection = "ROCK";
    const computerSelection = computerPlay();
        
    if (playerSelection == computerSelection){
        return ('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + " It's a tie!");
    }
    if (playerSelection == 'ROCK'){
        if (computerSelection == 'SCISSORS'){
            return ('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + ' You win!');
        }else{
        return ('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + ' Computer wins!');
        }
    }
    if (playerSelection == "SCISSORS"){
        if (computerSelection == "ROCK"){
            return ('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + ' Computer wins!');
        }else {
            return('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + ' You win!');
        }
    }
    if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            return ('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + ' Computer wins!');
        }else {
            return('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection + ' You win!');
        }
    }
}
//calls function to play game
console.log(playRound());
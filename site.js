
//Random picker for computer to play
function randomPick ()  {
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

function game() {
    
    //code to play 5 rounds here
    // for (let i =0; i <5; i++){
         
        
        // console.log(playRound());

    // }
}
//Compares results from game and disply winner to console
function playRound(){

    let playerSelection = prompt('Rock paper or scissors?');
    //const playerSelection = randomPick();
    const computerSelection = randomPick();
        
    if (playerSelection.toUpperCase() == computerSelection){
        return ('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + " It's a tie!");
    }
    else if (playerSelection.toUpperCase() == 'ROCK'){
        if (computerSelection == 'SCISSORS'){
            return ('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + ' You win!');
        }else{
        return ('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + ' Computer wins!');
        }
    }
    else if (playerSelection.toUpperCase() == "SCISSORS"){
        if (computerSelection == "ROCK"){
            return ('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + ' Computer wins!');
        }else {
            return('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + ' You win!');
        }
    }
    else if (playerSelection.toUpperCase() == "PAPER"){
        if (computerSelection == "SCISSORS"){
            return ('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + ' Computer wins!');
        }else {
            return('Player chose: ' + playerSelection.toUpperCase() + ' Computer chose: ' + computerSelection + ' You win!');
        }
    }
}
//calls function to play game
console.log(game());

//test for Gui_Rock branch
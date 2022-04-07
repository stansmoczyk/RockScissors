
//Random picker for computer to play
const computerPlay = () => {
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
//console.log(computerPlay());



function playRound(playerSelection, computerSelection) {
    let computerWins = 0;
    let playerWins = 0;
    let player = playerSelection;
    let puter = computerSelection

    for (let i =0; i <5; i++){
         
        //code to play 5 rounds here
        console.log(comparePlay(player, puter));
    
    
    //console.log('Player chose: ' + playerSelection + ' Computer chose: ' + computerSelection);//Show it works for now
    }
}

function comparePlay(playerSelection, computerSelection){

        
    if (playerSelection == computerSelection){
        return ("It's a tie!");
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
            return("You win!");
        }
    }
}

    


const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
//console.log(comparePlay(playerSelection, computerSelection));
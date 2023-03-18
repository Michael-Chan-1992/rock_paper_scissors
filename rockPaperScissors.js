function getComputerChoice(){
  const option = ['rock','paper','scissors'];
  const randomIndex = Math.floor(Math.random() * 3)
  
  return option[randomIndex]
}

function getPlayerChoice(){
  const choice = prompt('Rock paper scissors?', "").toLowerCase();
  
  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    alert('Invalid input');
    return getPlayerChoice()
  }

  return choice;
}

function isPlayerWin(playerSelection, computerSeclection){
  const playerWinCondition = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }
  return playerWinCondition[playerSelection] === computerSeclection
}

function playRound(playerSelection, computerSeclection){
  console.log(playerSelection, computerSeclection);

  if (playerSelection === computerSeclection) return "Tie"

  if (isPlayerWin(playerSelection, computerSeclection)) return "You Win"

  return "You Lose"
}

function game(){
  let user = 0;
  let computer = 0;

  for(let i = 1; i <= 5; i++){
    const roundResult = playRound(getPlayerChoice(),getComputerChoice())
    console.log(roundResult)

    switch (roundResult){
      case "Tie":
        i--;
        break;
      case "You Lose": 
       computer++;
        break;
      case "You Win":
        user++
    }
    
    if (i < 5){
      console.log(`Current reuslt, User: ${user} Computer: ${computer}`)
    }
  }

  console.log(`Final reuslt, User: ${user} Computer: ${computer}`)
  console.log(`You ${user > computer ? 'Win' : 'Lose'}`)

}

game();
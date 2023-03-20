let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button')
const result = document.querySelector('div.result')
const player = document.querySelector('div.player')
const computer = document.querySelector('div.computer')
btns.forEach(btn => btn.addEventListener('click', e => playRound(e.target.textContent, getComputerChoice())))

function getComputerChoice(){
  const option = ['rock','paper','scissors'];
  const randomIndex = Math.floor(Math.random() * 3)
  
  return option[randomIndex]
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
  if (playerSelection === computerSeclection) {
    result.textContent = "Tie"
  } else if (isPlayerWin(playerSelection, computerSeclection)){
    result.textContent = `You win! You picked ${playerSelection} while computer picked ${computerSeclection}`
    player.textContent = `Player: ${++playerScore}`
  } else {
    result.textContent = `You lose! You picked ${playerSelection} while computer picked ${computerSeclection}`
    computer.textContent = `Computer: ${++computerScore}`
  }
  checkGameFinish()
}

function checkGameFinish(){
  if (computerScore === 5){
    alert('Game set match! Computer win!')
    btns.forEach(btn => btn.setAttribute('disabled', ''))
  } else if (playerScore === 5){
    alert('Game set match! Player win!')
    btns.forEach(btn => btn.setAttribute('disabled', ''))
  }
}
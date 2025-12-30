let playerScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! Computer chose ${computerChoice}.`;
    playerScore++;
  } else {
    result = `You lose! Computer chose ${computerChoice}.`;
    computerScore++;
  }

  document.getElementById('result').innerText = result;
  document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}
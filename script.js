let playerScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
    document.querySelector('.computer-wins').style.display = 'none';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! Computer chose ${computerChoice}.`;
    playerScore++;
    document.querySelector('.computer-wins').style.display = 'none';
  } else {
    result = `You lose! Computer chose ${computerChoice}.`;
    computerScore++;
    document.querySelector('.computer-wins').style.display = 'block';
  }

  document.getElementById('result').innerText = result;
  document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}
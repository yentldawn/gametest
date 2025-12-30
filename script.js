<<<<<<< HEAD
function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! Computer chose ${computerChoice}`;
  } else {
    result = `You lose! Computer chose ${computerChoice}`;
  }

  document.getElementById('result').innerText = result;
=======
function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! Computer chose ${computerChoice}`;
  } else {
    result = `You lose! Computer chose ${computerChoice}`;
  }

  document.getElementById('result').innerText = result;
>>>>>>> 143f8ac22dfab0e97d1ce9f1c5017293dc44ffc3
}
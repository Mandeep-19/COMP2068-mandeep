// lab1.js - Rock Paper Scissors console app using 'prompt' package
const prompt = require('prompt');

function normalize(input) {
  if (!input) return null;
  const s = String(input).trim().toLowerCase();
  if (s === 'rock' || s === 'r') return 'ROCK';
  if (s === 'paper' || s === 'p') return 'PAPER';
  if (s === 'scissors' || s === 'scissor' || s === 's') return 'SCISSORS';
  return null;
}

function decideWinner(user, computer) {
  if (user === computer) return "It's a tie";
  if (user === 'ROCK') return computer === 'SCISSORS' ? 'User Wins' : 'Computer Wins';
  if (user === 'PAPER') return computer === 'ROCK' ? 'User Wins' : 'Computer Wins';
  if (user === 'SCISSORS') return computer === 'PAPER' ? 'User Wins' : 'Computer Wins';
  return 'Invalid selection';
}

// Start prompt and get user selection
prompt.start();
console.log("Choose ROCK, PAPER or SCISSORS (you can also type R/P/S):");

prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const userSel = normalize(result.userSelection);
  if (!userSel) {
    console.log('Invalid selection. Please enter ROCK, PAPER, or SCISSORS (or R/P/S).');
    return;
  }

  // Computer selection using lab's ranges:
  // 0.00 - 0.34 => PAPER
  // 0.35 - 0.67 => SCISSORS
  // 0.68 - 1.00 => ROCK
  const r = Math.random();
  let computerSelection;
  if (r <= 0.34) computerSelection = 'PAPER';
  else if (r <= 0.67) computerSelection = 'SCISSORS';
  else computerSelection = 'ROCK';

  console.log(`User Selection:     ${userSel}`);
  console.log(`Computer Selection: ${computerSelection}`);
  console.log(decideWinner(userSel, computerSelection));
});

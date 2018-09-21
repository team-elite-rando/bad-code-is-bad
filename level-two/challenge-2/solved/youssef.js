// The goal of this code: Have the computer play Rock, Paper, Scissors against itself
// This one is a bit of a difficulty spike from previous challenges
// Proceed with caution
const k = require('kyanite/dist/kyanite.js')
// Display the winner
// const choices = ['r', 'p', 's']
const player1Choice = Math.floor(Math.random() * 3)
const player2Choice = Math.floor(Math.random() * 3)

const p2Win = x => k.or(x === 1, x === -2) ? 'Player 2 wins!' : x
const tie = x => x === 0 ? 'It\'s a tie! No winner' : x
const winner = x => k.or(x === 'It\'s a tie! No winner', 'Player 2 wins!') ? x : 'Player 1 wins!'

const play = (p1, p2) => {
  return k.pipe([
    p2Win,
    tie,
    winner
  ], p2 - p1)
}

console.log(play(player1Choice, player2Choice))

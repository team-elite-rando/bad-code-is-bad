// The goal of this code: Have the computer play Rock, Paper, Scissors against itself
// This one is a bit of a difficulty spike from previous challenges
// Proceed with caution

// Display the winner
const choices = ['r', 'p', 's']
const player1Choice = choices[Math.floor(Math.random() * choices.length)]
const player2Choice = choices[Math.floor(Math.random() * choices.length)]

const play = () => {
  if (player1Choice === 'r' && player2Choice === 'p') {
    console.log('player 2 wins!')
  } else if (player1Choice === 's' && player2Choice === 'r') {
    console.log('player 2 wins!')
  } else if (player1Choice === 'p' && player2Choice === 's') {
    console.log('player 2 wins!')
  } else if (player1Choice === 'r' && player2Choice === 's') {
    console.log('player 1 wins!')
  } else if (player1Choice === 's' && player2Choice === 'p') {
    console.log('player 1 wins!')
  } else if (player1Choice === 'p' && player2Choice === 'r') {
    console.log('player 1 wins!')
  } else if (player1Choice === player2Choice) {
    console.log('It\'s a tie! No winner')
  }
}

play()

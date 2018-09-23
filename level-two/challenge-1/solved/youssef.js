// This codes goal: Simply take the array of animals and add an s to the end of each one
const k = require('kyanite/dist/kyanite.js')
// ==== DO NOT EDIT BETWEEN THESE LINES
const animals = ['Lion', 'Zebra', 'Tiger', 'Duck']
// ==== Okay you can edit again

let results = k.map(x => x + 's', animals)
// let results = []

// for (let i = 0; i < animals.length; i++) {
//   results.push(animals[i] + 's')
// }

// ==== DO NOT EDIT BETWEEN THESE LINES
// Output expected: ['Lions', 'Zebras', 'Tigers', 'Ducks']
console.log(results)
// ==== Okay you can edit again

// The goal of this code is if you pass a string to a function, it adds it to the array
// If you pass the function the same string, it will then remove the value from the array

const k = require('kyanite/dist/kyanite.js')
const itemsToToggle = ['foo', 'bar', 'test', 'other', 'foo', 'other']

let selected = [1, 2, 3, 4]

// const check = (array, x) => {
//   if (selected.includes(x)) {
//     let idx = selected.indexOf(x)
//     selected = k.remove(idx, selected)
//   } else {
//     selected = k.insert(0, x, selected)
//   }
//   return selected
// }

// const mapper = x => k.map(check, x)

// mapper(itemsToToggle)

console.log(k.findIndex(x => x === 3, selected))
// Keep this array intact for running the test

// Make sure you can toggle to make the console.log display ['bar', 'test']
// Change this code as needed!
// itemsToToggle.forEach(x => toggle(x, selected))

// console.log(selected)

// The goal of this code is if you pass a string to a function, it adds it to the array
// If you pass the function the same string, it will then remove the value from the array
const k = require('kyanite/dist/kyanite.js')

const itemsToToggle = ['foo', 'bar', 'test', 'other', 'foo', 'other']

const fn = x => k.reduce((acc, val) => !k.includes(val, k.ensureArray(acc)) ? k.concat([acc, val]) : k.remove(k.findIndex(x => x === val, acc), acc), [], x)

console.log(fn(itemsToToggle))

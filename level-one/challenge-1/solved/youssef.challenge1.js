const k = require('kyanite/dist/kyanite.js')

let data = 1
let foo = 'bar'
let other = 'test'

const add = x => k.add(1, x)

const array = x => [data, foo, other, x]

const clg = x => console.log(x)

k.pipe([
  add,
  array,
  k.map(clg)
], data)

// console.log(data)
// console.log(foo)
// console.log(other)
// console.log(data++)

// Expected result output to console:
// 1, 'bar', 'test', 2

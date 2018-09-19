const k = require('kyanite/dist/kyanite.js')

let test = []

const array = x => {
  for (let i = 0; i < x; i++) {
    test = k.concat([test, i + 1])
  }
  return test
}

console.log(array(3))

// Expected result output to console:
// [1, 2, 3]

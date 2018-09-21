const k = require('kyanite/dist/kyanite.js')

let bool = true

const fn = x => {
  if(x) {
    console.log('It\'s good')
  } else {
    console.log('It\'s bad')
  }
  return x
}

const test = x => x ? 'It\'s a snake!' : null 

const run = x => {
    k.pipe([
    fn,
    test,
    console.log
  ], x)
}

run(bool)

// Expected result output to console:
// 'It's good'
// 'It's a snake!'

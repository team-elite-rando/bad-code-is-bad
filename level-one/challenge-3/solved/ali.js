let bool = true

const fn = x => x ? 'It\'s good' : 'It\'s bad';

console.log(fn(bool))

const foo = y => y ? 'It\'s a snake!' : undefined

let test = foo(bool)

console.log(test)

// Expected result output to console:
// 'It's good'
// 'It's a snake!'

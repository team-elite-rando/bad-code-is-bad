let bool = true

const fn = () => {
  if (bool) {
    return 'It\'s good'
  } else {
    return 'It\'s bad'
  }
}

console.log(fn())

let test = foo()

function foo() {
  if (bool) {
    return 'It\'s a snake!'
  }
}

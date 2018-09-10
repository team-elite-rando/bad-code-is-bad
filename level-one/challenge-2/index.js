
let test = []

let fn = (d) => {
  test.push(d)
}

fn(1)
fn(2)
fn(3)

console.log(test)

// Expected result output to console:
// [1, 2, 3]

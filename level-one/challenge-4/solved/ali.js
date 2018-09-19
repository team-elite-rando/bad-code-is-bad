// The goal of this code is if you pass a string to a function, it adds it to the array
// If you pass the function the same string, it will then remove the value from the array

const selected = []

const toggle = (item, list) => {
  const idx = list.indexOf(item)

  if (idx > -1) {
    list.splice(idx, 1)
  } else {
    list.push(item)
  }
}

const boggle = (item, list) => list.indexOf(item) > -1 ? 
  list.splice(list.indexOf(item), 1) : list.push(item);


// Keep this array intact for running the test
const itemsToToggle = ['foo', 'bar', 'test', 'other', 'foo', 'other']

// Make sure you can toggle to make the console.log display ['bar', 'test']
// Change this code as needed!

//itemsToToggle.forEach(x => toggle(x, selected))

itemsToToggle.forEach(x => boggle(x, selected))

console.log(selected)

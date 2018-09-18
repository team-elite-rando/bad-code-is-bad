let data = 1, foo = 'bar', other = 'test'

const addOne = y => y + 1;

let result = addOne(data);

let arr = [data, foo, other, result]

arr.map(dataItem => console.log(dataItem));

// Expected result output to console:
// 1, 'bar', 'test', 2
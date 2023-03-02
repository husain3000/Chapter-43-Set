var mySet = new Set([1, 2, 3, 4]);
const myArray = [...mySet];

mySet = new Set(myArray.filter(x => x % 2 === 0));
console.log(mySet);
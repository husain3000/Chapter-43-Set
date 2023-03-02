var set1 = new Set([1, 2, 3, 4]),
 set2 = new Set([3, 4, 5, 6]);
const intersection = new Set(Array.from(set1).filter(x => set2.has(x)));
const difference = new Set(Array.from(set1).filter(x => !set2.has(x))); 

console.log(difference)
console.log(intersection)
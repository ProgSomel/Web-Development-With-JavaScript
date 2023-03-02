const max = Math.max(12, 85, 999, 78);
// console.log(max); 

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers); 
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(22);
console.log(numbers);
console.log(numbers2); 

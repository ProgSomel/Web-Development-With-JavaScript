const numbers = [12, 56, 87, 44];
const half = numbers.map(num => num/2);
const thirds = numbers.map(num => num/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom hanks', 'Tom Cuise', 'Tom Bady', 'Tom Solaiman'];
const fristLettes = friends.map(friend => friend[0]);
// console.log( fristLettes);
const nameLengths = friends.map(friend => friend.length);
// console.log( nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 40000},
    {id: 1, name: 'tablet', price: 50000},
]
// const items = products.map(product => console.log(product.name) );
const items = products.map(product => product.name);
console.log(items);



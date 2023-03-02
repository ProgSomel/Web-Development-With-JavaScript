const numbers = [13, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tinyNumbers = numbers.filter(number => number <10);
const even = numbers.filter(number => number % 2 === 0 );
console.log(bigNums);
console.log(tinyNumbers);
console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 40000},
    {id: 1, name: 'tablet', price: 50000},
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);

//! Filter sob Gula re Dibe Jetai Milbe
//! Find Jeguli Milbe tar prothom ta dibe// Akta dibe
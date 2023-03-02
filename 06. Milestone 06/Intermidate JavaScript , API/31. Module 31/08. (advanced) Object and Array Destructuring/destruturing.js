const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '01870436887',
    price: 400
}
// const phone = fish.phone;
// const color = fish.color;
//! We Can Write All of Above Code Like This:
const { phone} = fish;
const {age,name} = {name: 'Almas', age:56, profession: 'Makeup-Artist'};
console.log(age,name);

const {address} = fish;
console.log(address);

//! Array Destructuring
const [first, another] = [44,99];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king, lost, notun);

function getNames() {
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);


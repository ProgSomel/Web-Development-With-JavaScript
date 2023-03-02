const add = (first, second) => first + second;

const getFullName = (first, second) => first + ' ' + second;

const multipy = (a, b) => a*b;

const result = multipy(7, 8);
// console.log(result);

//! If there is no Parameter
const getPie = () => 3.14;

//! One Parameter
const doubleIt = (num) => num*2;

//! One parameter Simple version
const fiveTimes = num => num*5;

//! MultiLine Arrow Function
//? Must be return function
const doMath = (x, y, z) => {
    const firstSum = x+y;
    const secondSum = y+z;
    const multiplyResult = firstSum*secondSum;
    const result = multiplyResult/2;
    return result;
}


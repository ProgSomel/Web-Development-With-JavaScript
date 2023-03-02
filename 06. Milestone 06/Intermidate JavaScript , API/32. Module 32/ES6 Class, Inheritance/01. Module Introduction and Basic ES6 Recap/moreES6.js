//! 1. var let const
//? Breakup With var
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let salary = 450;
slary = 455;

//! 2. Default Parameter
function calculateSalary (salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

//! 3. Template String
document.elementHTML = `
<div>
<h3>Name:</h3>
<p>Address:</p>
<p>Salary:${calculateSalary(10000,0,0)}</p>
<p>Others:${numbers[2]}</p>
</div>
`

//! 4. Arrow Function
const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary *tax + bonus;


//! 5. spread Operator
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 23];


//! 6. Destructuring
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'Sakib Al Hasan', salary: 100000000}

const [a, b, ...r] = [12, 45, 21, 65, 98];

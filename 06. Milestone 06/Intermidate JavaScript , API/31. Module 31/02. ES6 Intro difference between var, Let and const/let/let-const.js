//break up with var
//No more Use of var
//let: reAssignable
//const: Do not allow to Reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan Pakhi';
bird = 'moina Pakhi';
console.log(bird);//It will Give Error

const message = bird + 'potas potas';//Can use const bird

const numbers = [12, 89, 65,45];
//Reassign Not Allow
numbers = [77,66, 45, 88];
//But Can push or Modify
numbers.push(123);
//Or can Change Any value
numbers[1] = 124;

const student = {
    name: 'mofiz',
    address: 'Rangpur'
}
//This is not possible
student = {
    name: 'Mofazzal'
}
//But this is Possible
student,name = 'Mofazzal';

let sum;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;

}
//It will Show error because we declare number as const // const and let are block element so these can,t be declare outside the block 
//So we need to declare this as var 
console.log(number);

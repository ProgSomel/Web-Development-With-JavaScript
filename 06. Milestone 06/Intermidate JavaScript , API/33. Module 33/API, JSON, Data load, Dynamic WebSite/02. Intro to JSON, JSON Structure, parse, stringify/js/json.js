const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
//! JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/** 
{ id: 1, name: 'Gorib Aamir', job:
 'actor' }JavaScript Object
{"id":1,"name":"Gorib Aamir","job"
:"actor"}JSON String Object
**/
const shop = {
    owner: 'Alia',
    address:{
        street: 'Kochukhet Voot er Goli',
        city: 'ranbir',
        country: 'BD',
    } ,
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen : true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
/*
{
  owner: 'Alia',
  address: { street: 'Kochukhet Vo
ot er Goli', city: 'ranbir', count
ry: 'BD' },
  products: [ 'laptop', 'mic', 'mo
nitor', 'keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
{"owner":"Alia","address":{"street
":"Kochukhet Voot er Goli","city":
"ranbir","country":"BD"},"products
":["laptop","mic","monitor","keybo
ard"],"revenue":45000,"isOpen":tru
e,"isNew":false}
*/
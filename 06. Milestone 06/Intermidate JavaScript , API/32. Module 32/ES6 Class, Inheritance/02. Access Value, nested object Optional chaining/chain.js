const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'doctor'},
        {id: 1, name: 'dabul', job: 'leader'}
    ]
}
// console.log(data.data[0].job);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A Kochukhet lane',
            second: 'third FLoor',
            third: 'right side'

        
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
        
    }
}
const userFLoor = user.address.street.second
console.log(userFLoor);

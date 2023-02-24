const personOne = `
{
    "name": "Nishanth",
    "roll_no": 181223,
    "state": "Tamil Nadu",
    "age": 21,
    "employee": true,
    "district": "salem",
    "hobby": ["cricket", "football"]
}`;

const personTwo = `
{
    "name": "Guru",
    "roll_no": 4545444,
    "state": "Tamil Nadu",
    "age": 21,
    "employee": false,
    "district": "ooty",
    "hobby": ["Kabaddi", "hockey"]
}`;

const personThree = `
{
    "name": "Sugumaran",
    "roll_no": 548454,
    "state": "Andhra Pradhesh",
    "age": 21,
    "employee": false,
    "district": "KSR",
    "hobby": ["Kabaddi", "tennis"]
}`

const personFour = `
{
    "name": "Balaji",
    "roll_no": 975254,
    "state": "Tamil Nadu",
    "age": 21,
    "employee": true,
    "district": "cuddalore",
    "hobby": ["volleyball", "tennis"]
}`

 

const userOne = JSON.parse(personOne);
const userTwo = JSON.parse(personTwo);
const userThree = JSON.parse(personThree);
const userFour= JSON.parse(personFour);

// const five = JSON.stringify(personOne);

// console.log(five);


console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);

console.log(userOne.name);
console.log(userTwo.name);
console.log(userThree.name);
console.log(userFour.name);


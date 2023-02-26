//var, let and const

function sample()
{
    for(var i=0;i<6;i++)
    {
        // const f = 6;

    }
    console.log(i);
}

sample();

//const keyword
const x=1;
// x =6;
console.log(x);

const person ={
    name : "Nishanth",
    roll: "191EC217",
    play() {
        console.log("Im playing")
    },
    dance(){}
};

person.play();


const myFriend = 'name';
person[myFriend.value] ="Ajay";

person.activity="watching movie";

console.log(person);

//this keyword

const team={
    name: "Nattu",
    cricKetPlay()
    {
        console.log("I am playing cricket");
        console.log(`By using this ${this}`);
    }
}


team.cricKetPlay();


//Getting reference to the cricketPlay:

const ref = team.cricKetPlay;

console.log(`I'm calling the reference: ${ref}`)
console.log(ref);


//Binding this



var hockeyTeam={
    name:"king",
    hockeyPlay()
    {
        console.log("I'm playing hockey");
    }
}

//Using bind we can bind the function to the object
var callref = hockeyTeam.hockeyPlay.bind(hockeyTeam);

callref();

//by using bind will create the new instance for the hockeyPlay


//Arrow functions

 function square(number)
{
    return number * number;
}

var val = square(2);

console.log(val);

//Making arrow
let cal = number => number * number;
console.log(`The arrow function calling: ${cal(7)}`);

let arrowVal = value => value + value;
console.log(`The second arrow function: ${arrowVal(10)}`);

const jobs =[
    {id: 1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
];

const activeJobs = jobs.filter(
    function(job)
    {
        return job.isActive;
    }
)
console.log(activeJobs);

//=>

//Arrow function doesn't rebind the this keyword

let valueStore = jobs.filter(job => job.isActive);

console.log(`The arrow function for array: ${valueStore}`);

//Map arrays

let colors = ['pink', 'red','blue'];

const items = colors.map(function(color)
{
    return `This color ${color}`;
}
)

console.log(items);

let stationaries = ['pen', 'pencil', 'notebook'];

const get = stationaries.map(function(pick)
{
    return `Stationaries mapping - ${pick}`;
}
)

console.log(get);

//Using arrow functions

let getStationaries = stationaries.map( getValue => `Hi ${getValue}`);

console.log(getStationaries);


//Object Destructing

var MyAddress = {
    name: "Nishanth",
    district : "Salem",
    pincode : "636453"
}

let p = MyAddress.name;
let q = MyAddress.district;
let r = MyAddress.pincode;

console.log(`My name is ${p} I am from ${q} and my pincode is ${r}`);

//Destructor syntax

//Working: Extracting the name property from MyAddres object and again storing name variable

const {name: n, district: d, pincode: pq} = MyAddress;

console.log(`Using the destructor: My name is ${n} and I'm from ${d} and my pincode is ${pq}.`);

//Spread Operator

const array1 =[10,20,30];
const array2 =[40,50,60];

var ans = array1.concat(array2);

var ans = [...array1, 'a', ...array2];

console.log(ans);

const clone = [...array1];

console.log(clone);

//Combining objects using spread object(...)

const third ={name: "Nishanth"};
const fourth = {role: "student"};

const fifth = {...third, ...fourth, state:"Tamil Nadu"};

console.log(fifth);

//classes

class Person{
    constructor(name, rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }

    walk()
    {
        console.log("I can walk");
    }
}

const userPerson = new Person("Nishanth", 191223);

console.log(userPerson);

//Inheritance in JavaScript

// class Car{
//     constructor(name, model)
//     {
//         this.name=name;
//         this.model=model;
//     }
//     manufacture()
//     {
//         console.log("Can be manufactured");
//     }
// }

// class RollsRoyce extends Car{

//     constructor(model,year)
//     {
//         super(name);
//         this.model=model;
//         this.year=year;
//     }

//     ride()
//     {
//         console.log("Riding");
//     }
// }

// const ride = new RollsRoyce("RollsRoyce",2002);

// console.log(ride);

//Modules

//Arrays

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();


for(let x of f)
{
    console.log(x, f[x]);
}

const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 18;
}

ages.every(checkAge)

console.log(checkAge());




const mapping = [10,20,30,40,50];

function checkSum(num)
{
    return num*5;
}

let a = mapping.map(checkSum);

console.log(a);

//Extended parameter handling

let greet = (name="Nishanth", age=18) =>
{
    console.log(name,age);
}
greet();
greet("hey");


//Rest parameter

let t;
console.log(t);

const storer = function(...args)
{
    let total =0;
    for(const arg of args)
    {
        total +=arg;
    }

    return total;
}

console.log(storer(1,43,2));

//Spread operator

const spread = function(a,b)
{
    return a+b;
}

console.log(spread(40,34));

//Template literals

//Using map and reduce.
const mapFor =[10,20,30,40,50];
function callback(num)
{
    return num *3;
}
const MapStore = mapFor.map(callback);
console.log(MapStore);

const reduceCall= (num1, num2) => num1 + num2;
var reduceStore = MapStore.reduce(reduceCall);
console.log(reduceStore);

// String replace
const replaceString = "My name is nishanth";
const sprStr = replaceString.replace("nishanth", "praveen");
console.log(sprStr);

//Built-in methods

//Object.assign() - method

//It can copy an object, clone from another object, or concatenate two or more objects.

//Copy the values from another object:

const myObj1 = {
    car:"Hyundai"
}

const myObj2 ={
    myName: "Nishanth",
    myage: 21,
    mycollege: "BIT"
}

Object.assign(myObj1,myObj2);

console.log(myObj1);

//Cloning the object

const newObj = Object.assign({},myObj2);

console.log(newObj);

// Duplicating properties from two objects to one object.

const myObj3={
    myName: "prince",
    myAge: 25,
    myCollege: "KCT"
}

const duplicateObject = Object.assign({},myObj2, myObj3);

console.log(duplicateObject);


//Object.entries

//Object.entries() method returns the keys and values of the object as an array.

//Object.entries()

console.log(Object.entries(duplicateObject));


//Object.getOwnPropertyDescriptors()

//Allows us to get the property descriptors for an object
console.log("The Object.getOwnPropertyDescriptors");
console.log(Object.getOwnPropertyDescriptors(duplicateObject));


// Random number generation: 


let randomNumber = Math.floor(Math.random() * 50) +1;

console.log(`The generated randomNumber is ${randomNumber}`);



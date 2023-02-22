// Object is a collection of multiple values like string, numbers, boolean.
// In object itself we can have arrays, functions also.
// Creating an empty object that is var MyObj = {};
var MyDetails={
    myName: "Nishanth",
    MyRoll: 12345,
    state: "Tamil Nadu",
    district: "salem",
    pincode: 636453,
    gender: "male",
    status : "Unmarried"
}

//Accessing through the dot notation
console.log(`My name is ${MyDetails.myName}`);
console.log(MyDetails.state);
console.log(MyDetails.gender);

//Accessing through the bracket notation

console.log(MyDetails["status"]);


//Another form of object declaration:

var employee1 = {};

employee1.firstName="Nishanth";
employee1.secondName="murugan";
employee1.district="chennai";
employee1.pincode = 636453;

var employee2 = {};

employee2.firstName="ezhil";
employee2.secondName="murugan";
employee2.district="salem";
employee2.pincode=634643;


function createEmployee(firstName,secondName,district,pincode){
    var newObject ={};
    newObject.firstName = firstName;
    newObject.secondName = secondName;
    newObject.district = district;
    newObject.pincode = pincode;
    return newObject;
    }

 var employee3 = createEmployee("dominic","torretto","salem",642276);

 console.log(employee1);
 console.log(employee2);
 console.log(employee3);


 // Using constructors - It provides the way for shortcut for the functions to create objects.
 // We use new keyword everytime while creating object using constructors.


 function employeeConstructor(firstName,secondName,district,pincode)
    {
    this.firstName = firstName;
    this.secondName = secondName;
    this.district = district;
    this.pincode = pincode;
    }

var employee4 = new employeeConstructor("Jackie","chan","cuddalore",632733);

console.log(employee4);


//Without constructoe
function createCar(name,color,gear)
{
    var newCar={};
    newCar.name = name;
    newCar.color = color;
    newCar.gear = gear;
    return newCar;
}

let carOne = createCar("Hyundai", "Black", 5);
let carTwo = createCar("Ford", "white",4);
let carThree = createCar("Benz", "Red",4);


console.log(carOne);
console.log(carTwo);
console.log(carThree);


//With constructor


function CreateCarConstructor(name,color,gear)
{
    // var this ={}
    this.name = name;
    this.color = color;
    this.gear = gear;
    // return this;
}

let carFour = new CreateCarConstructor("Rolls Royce","silver-white",5);
console.log(carFour);

// Calling regular function by using constructor with new keyword it will work.


// Calling constructor function without using constructor without new keyword it wont work it returns undefined because there will be return values.

// this keyword

function flower()
{
    console.log("Hii I am flower");
}

flower(); //First method


var lilly ={};

lilly.flower = function()
{
    console.log("Hello world"); 
}

lilly.flower(); //Second method

new flower(); //Third method


// Running JavaScript in browser this keyword will be global object(window object)
//Method 1:  StandAlone function execution || this reference - global object
//Method 2: Calling functions as property of an object reference
//this reference : The object reference


function MotorCycle(name,color,battery)
{
    this.name = name;
    this.color = color;
    this.battery = battery;
    this.Incbattery = function()
    {
        this.battery += 4;
    }
}

var bikeOne = new MotorCycle("Yamaha R15","Black",4);
bikeOne.Incbattery();

console.log(bikeOne);
console.log(bikeOne.Incbattery);


function Manufacturer(name)
{
    this.name =name;
}

let user = new Manufacturer("Nishanth");

console.log(user);

//Giving user access to the function Incbattery.
user.Incbattery = Manufacturer.Incbattery;
console.log(user.Incbattery);


// call() function is used to change the context of the invoking function and helps to replace the value of "this" inside the function.
//Prototypes - Objects having default property inside is called prototype
//Prototype is a concept in JavaScript used to build the objects using template or blueprint.
//JavaScript objects don't own methods. They just have properties, and any property could be a function.

//new - create memory space for objects in heap memory.


class myapp{
   
    constructor(name,password)
    {
    this.name=name;
    this.password=password;
    }
}

const myfirst=new myapp("Nishanth",12345);
console.log(myfirst);

//function sample() - while creating function two objects will be created 
//One object is for sample() and another object is for prototype

function sample()
{
   //Empty object
}

console.log(sample.prototype);


function welcome()
{
    console.log("Hello world");
}

welcome();


//Factory functions - If I have three objects, we have three copies of the same function, each functions will have separate copy, which increases space.

//constructor - Which will create prototype chain and separate copy wont be created and all objects will be a reference to the functions.

//Constructors are the special method for assigning properties and it is automatically called when we creating an object.


//class

class worker
{
    constructor(name,rollno)
    {
        this.name=name;
        this.rollno = rollno;
    }

     access()
     {
        console.log(`Hi my name is ${this.name} and my roll number is ${this.rollno}`);
    }

}

let worker1 = new worker("Nishanth",12345);
let worker2 = new worker("Guru",98765);

worker1.access();
worker2.access();


//Inheritance 

class vehicle
{
    constructor(industry)
    {
        this.industry ="maruti";
    }
    greet()
    {
        console.log("Greetings");
    }
}

class car extends vehicle
{
    constructor(name,model)
    {
        super();
        this.name=name;
        this.model=model;
    }

    show()
    {
        return this.greet();
    }

}

var emp1 = new car("suzuki",2022);

console.log(`The company name is ${emp1.industry} ${emp1.name} and the model is ${emp1.model}`);


//polymorphism

class ship
{
    float()
    {
        console.log("The ship can float in the ocean");
    }
}

class submarine extends ship
{

}

class normalship extends ship
{

}

submarine = new submarine();
submarine.float();

normalship = new normalship();
normalship.float();
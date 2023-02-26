const array =['milk','bread','noodles','noodles'];
console.log(array);

const fruits = ["mango", "apple", "grape", "orange"];
console.log(fruits);

//join()
console.log(fruits.join());

const cars =["Hyundai", "RollsRoyce", "Maruti-suzuki", "BMW"];

console.log(cars.push("kiwi"));

//unshift()
const createVegetable = ["tomato","potato","brinjal","beans"];
const outputVegetable = createVegetable.unshift("mushroom");
console.log(outputVegetable);

//arrayLeys

const arrayKeys = ["brinjal", "wheat", "onion"];
console.log(arrayKeys);

arrayKeys[6]="tomato";

console.log(arrayKeys.length);

console.log(Object.keys(arrayKeys));

//arrayConcat
const arrayConcat = createVegetable.concat(arrayKeys);

console.log(arrayConcat);

//CopyWithin

const arrayColors = ["red", "green", "yellow", "blue", "black", "orange"];

console.log(arrayColors.copyWithin(0,2,4));

//entries

arrayColors.entries();

for(const i of arrayColors)
{
    console.log(i);
}

//every returns true


function checkEvery(num)
{
    return num>18;
}
const arrayEvery = arrayColors.every(checkEvery);

console.log(arrayEvery);

//fill

const motorCycle = ["yamaha","honda", "gixxer", "fascino", "discover"];

const arrayFill = motorCycle.fill("ninja h2r",2,4);
console.log(arrayFill);

//filter

const arrayAge = [10,20,30,40,50, 53, 62, 70];

function checkFilter(num)
{
    return num>30;
}

const arrayFilter  = arrayAge.filter(checkFilter);

console.log(arrayFilter);


//find - retruns first element which passes the condition

function checkFind(num)
{
    return num>18;
}

const arrayFind = arrayFilter.find(checkFind);
console.log(arrayFind);

//findIndex


const arrayMaxAge = [7,9,20,30,35, 42, 50];

function checkFindIndex(num)
{
    return num>18;
}
const arrayFindIndex = arrayMaxAge.findIndex(checkFindIndex);
console.log(arrayFindIndex);


//forEach - calls the function for each element.

//from

const arrayFrom = Array.from("ABCDEF");

console.log(arrayFrom);

//isArray returns true if an array has objects

//arrayFlat

const arrayNest = [10,20,30,[86,53,90]];
console.log(arrayNest);
const arrayFlat = arrayNest.flat();
console.log(arrayFlat);





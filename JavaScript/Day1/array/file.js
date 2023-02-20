// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.onclick = () =>{
//     let name = prompt('Enter your name');
//     alert('Hello ${name}, welcome to the site!');
//     button2.textContent = 'Welcome ${name}';
// }


/*const para=document.querySelector('p');
para.addEventListener('click',namechange);

function namechange(){
    const name=prompt('Enter your name');
    para.textContent=`player 1: ${name}`;
}
*/

// let myName = 'Nishanth';

// function logName() {
//   console.log(myName);
// }

// logName();

//  myName;

// let myNumber = '500'; // oops, this is still a string
// console.log(typeof myNumber);

// myNumber = 500; // much better — now this is a number
// typeof myNumber;
// console.log(typeof myNumber);

// const bird = { name : 'peacock'};
// //console.log(bird.name);  

// bird.name = 'pigeon';
// console.log(bird.name);  

// const myInt = 5;
// console.log(typeof myInt);

// const myFloat = 6.667;
// console.log(typeof myFloat);


// const lotsOfDecimal = 1.766584958675746364;
// lotsOfDecimal;

// const twoDecimalPlaces = lotsOfDecimal.toFixed(3);   -->to fixed is used to round up the number
// console.log(twoDecimalPlaces);


// let myNumber = "74";
// myNumber += 3;
// console.log(myNumber)

// let myNumber = "74";
// myNumber = Number(myNumber) + 3;
// console.log(myNumber)

// const num1=10
// const num2=5
// let add;
// let sub;
// let div;
// let mul;
// let pow;
// let comp1;
// let comp2;
// let comp3;

// add=num1+num2;
// console.log(add)

// sub=num1-num2;
// console.log(sub)

// div=num1/num2;
// console.log(div)

// mul=num1*num2;
// console.log(mul)

// pow=num1**num2;
// console.log(pow)

// comp1= 5 + 10 * 3;
// console.log(comp1);

// comp2=(num2 % 9) * num1;
// console.log(comp2)

// comp3=num2 + num1 / 8 + 2;
// console.log(comp3)

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start machine") {
//     btn.textContent = "Stop machine";
//     txt.textContent = "The machine has started!";
//   } else {
//     btn.textContent = "Start machine";
//     txt.textContent = "The machine is stopped.";
//   }
// }


// const string = "The revolution will not be televised.";
// console.log(string);


// const badString = string;
// console.log(badString);

// const sin1 = 'Would you eat a "fish supper"?';
// const dbl1 = "I'm feeling blue.";
// console.log(sin1);
// console.log(dbl1);


// const big = 'I've got no right to take my place…';   -->we can't repeat a same quote another time in a string 
// console.log(big)

// const big= 'welcome\'s to aspire';
// console.log(big);

//concatenation
// let greeting='Welcome'
// let name1='praveen'
// console.log(`greeting ${name1}`);
// console.log(`${greeting} ${name1}`);
//console.log(greeting+', '+name1)

// const num=234;
// const name1="aspire";
// console.log(`${num}, ${name1}`)


// const myNum2 = 123;
// const myString2 = myNum2.toString();
// console.log(typeof myString2);

// const output = `I like the song.
// I gave it a score of 90%.`;
// console.log(output);

// const output = "I like the song.\nI gave it a score of 90%.";
// console.log(output);

// const name1= 'welcome';
// console.log(name1.length);
// console.log(name1[2]);
// console.log(name1.length-1);

//Testing if a string contains a substring

/*const name1="firefox";
//const name2="fox";
if(name1.includes("foxe")) {
    console.log("It's found");
}
else{
    console.log("It's not found");
}
*/

// const name1="firefox";
// //const name2="fox";
// if(name1.startsWith("f")) {
//     console.log("It's found");
// }
// else{
//     console.log("It's not found");
// }

// const name1="firefox";
// //const name2="fox";
// if(name1.endsWith("ox")) {
//     console.log("It's found");
// }
// else{
//     console.log("It's not found");
// }


//finding the position of a string
// const tag= 'MDN - Resources for developers, by developers in developers';
// // //console.log(tag.indexOf('developers')); 
// // console.log(tag.indexOf('r'));

// const firstOccurrence = tag.indexOf('developers');
// const secondOccurrence = tag.indexOf('developers', firstOccurrence + 1);
// const thirdoccurrence=tag.indexOf('developers', firstOccurrence + 1,secondOccurrence+1);;
// //console.log(firstOccurrence); 
// //console.log(secondOccurrence); 
// console.log(thirdoccurrence);


// const varname="Mozilla firefox"
// console.log(varname.slice(0,3)) -->(start index, ending index +1)
// console.log(varname.slice(1,3))
// console.log(varname.slice(1,4))


// const name1="welCOme Nishanth"
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());


//replace a string
// const tag="welcome to Aspire";
// console.log(tag.replace("Aspire","Nishanth"))


//replace all
// const tag="welcome to london to paris";
// console.log(tag.replaceAll("to","and"))


//array
//let arr=['nokia','samsung','realme','redmi','oneplus','vivo','apple','iqoo']
// let category=[1,2,3,[4,5,6,7]]
// console.log(arr);
// console.log(category);

// console.log(arr.length)
// console.log(category.length)

//  arr[0] = 'micromax';
// console.log(arr)

// const random = ['tree', 795, [0, 1, 2]];
// console.log(random[2][0]);
// console.log(random[2][1])
// console.log(random[2][2])

// console.log(arr.indexOf('samsung'))
// arr.push('techno')
// console.log(arr)


//unshift to push in an start of an array
// arr.unshift('poco')
// console.log(arr)


//Remove an item
// arr.pop()     --> last will remove
// console.log(arr)

//shift used to remove an item first in an array
// arr.shift()
// console.log(arr)

//splice is used to remove an item by using an index number splice(start,end)
// arr.splice(1,3)
// console.log(arr)


//for of print a data inside a array
// for(array of arr)
// console.log(array)

//for in print a index no of array
// for(array in arr)
// console.log(array)







// const array1 = ['a','b','c'];
// const array2 = ['d','e','f'];
// const array3 = array1.concat(array2);

// console.log(array3);

// const emp_array=[];
// emp_array.push("bike", "car", "truck");
// console.log(emp_array.length);  //3

// emp_array[5] = "van";
// console.log(emp_array[5]);

// console.log(Object.keys(emp_array));

// emp_array.length=10;
// console.log(emp_array);

// //Object.keys returns the elements index present in the array.
// console.log(Object.keys(emp_array));


// //Deletes the element in the array.
// emp_array.length=2;


// //Used to replace the elements within the array.
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3));


//Split the array

// const str = 'The array size is maximum';

// const words = str.split(' ');
// console.log(words[4]);


//Create a string from an array 

//The scope is global with 'var' when declared outside the function.


//slice doesn't alter the original array but creates the shallow copy of the array.



// let greet = [1,2,[3], [4,5],6,[]];

// let value = greet.flatMap(num => num);

// console.log(value);


//If-else statement;

/*
const a = 9;
const b = 1;
if(a>b)
{
    console.log("GREATER");
}
else
{
    console.log("LOWER");
}*/

// let shoppingDone = false;
// let childsAllowance;
// if (shoppingDone === true) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }
// console.log(childsAllowance);


// const myArray = ['I', 'hate', 'chocolates',];
// const output = myArray.join('');
// console.log(output);

// const myNumber =Math.random();
// console.log(myNumber);

//We can also call other functiob inside the function.


// function myFunction(){
//     console.log("Hi Iam Nishanth");
// }

// myFunction();

// const Mytext ="I learning Java";
// const output = Mytext.replace("I","Nishanth");
// alert(output);

//Optional Parameter

//Default Parameter\

// function op_fun(name='Nishanth'){
//     console.log("Hello ${name}!");
// }

// op_fun('Guru');

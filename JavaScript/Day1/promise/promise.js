//Success message comes means we use resolve and failure message reject.
// resolve calls the .then()
//reject calls the .catch()


//Synchronous function
function createPromiseFunction(name)
{
    return `Hii I am learning JavaScript and my name is ${name}`;
}
const name = "Nishanth";
const PromiseCall = createPromiseFunction(name)
{
    console.log(PromiseCall);
}

//callback function

function callFunctionONe(num) {
    return num + 1;
  }
  
  function callFunctionTwo(num) {
    return num + 2;
  }
  
  function callFunctionThree(num) {
    return num + 3;
  }
  
  function makeOperation() {
    let result = 0;
    result = callFunctionONe(result);
    result = callFunctionTwo(result);
    result = callFunctionThree(result);
    console.log(`The output: ${result}`);
  }
  
  makeOperation();

  const count = true;

  let countValue = new Promise(function (resolve, reject) {
      if (count) {
          resolve("Yes, JavaScript is easy");
      } else {
          reject("No JavaScript is not easy");
      }
  });
  
  console.log(countValue);

  //Using .then and .catch

let createPromise = new Promise((resolve,reject) => {
    let a = 1+4;
    if(a==5)
    {
        resolve("success")
    }
    else
    {
        reject("Failed")
    }
})

.then((message) => {
    console.log("This is in the then "+ message);
})

.catch((message)=>
{
    console.log("This is in the catch " + message);
})



const PromiseData = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

PromiseData.then((response)=>
{
    console.log(`Received Response: ${response.status}`);
});

console.log("Request Initiated");


//Promise chaining with then

// returns a promise

let storeValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved ");

  });
  
  
  storeValue
    .then(function successValueOne(getValue) {
      console.log(getValue);
    })
  
    .then(function successValueTwo() {
      console.log("Calling multiple functions");
    });


    //Fetching using the json

    const fetchJson = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    fetchJson
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].name);
      });

      //Using Promise.all()

      const getPromiseOne = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

      const getPromiseTwo = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');

      const getPromiseThree = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
      
      Promise.all([getPromiseOne, getPromiseTwo, getPromiseThree])
        .then((responses) => {
          for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
          }
        })
        .catch((error) => {
          console.error(`Failed to fetch: ${error}`)
        });


        //Using async() and await()

        function callingFunction(secondstoWait)
        {
            return new Promise((resolve) =>
            {
                setTimeout(()=>
                {
                    resolve(' ')},secondstoWait);
                })
            }
        

        async function mainFunction()
        {
            for(let i=0;i<15;i++)
            {
                await callingFunction(1000);
                console.log(i);
            }
            console.log("Loop completed");
        }

        mainFunction();
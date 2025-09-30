// Primitive datatype
// 7 types: String,Number, Boolearn, null, undefined,Symbol,BigInt


const score = 100
const scoreValue = 100

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 3211548565545477755n

const heros =["ramesh",'kushesh',"doga"]
let mydata = {
        name:"sumit",
        age: 20,
        address: "Bareilly",
    }

const myFunction = function(){
    // console.log("hello world");
    
}
// console.log(typeof anotherId);


// Reference Datetypes (Non Primitive)

// Array, Objects, Functions

// ++++++++++++++++ Memory +++++++++++++++++
// 2 type 
// Stack (Primitive), Heap (Non-Primitive)


let myYoutubename = "Sumitvlogbly"
let anotherName = myYoutubename
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@bly"
}

let userTow = userOne
userTow.email  = "sumit@google.com"
console.log(userOne.email);
console.log(userTow.email);






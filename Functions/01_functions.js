function sayMyName()
{
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}
// sayMyName();
// function addTwoNumbers(num1,num2)//prameters
// {
//     num1+num2;
//     console.log(num1+num2);
// }

function addTwoNumbers(num1 ,num2)
{
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}
const result = addTwoNumbers(7, 8); //arguments
// console.log("Result
// :", result);

function loginUserMeaaage(username)
{
    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in`;
}
// console.log(loginUserMeaaage("Sumit"));
// console.log(loginUserMeaaage());

// function calculateCartPrice(cartItem)
// {
//     let totalPrice = 0;
//     for(let i=0; i<cartItem.length; i++)
//     {
//         totalPrice = totalPrice + cartItem[i].price;
//     }
// }
// const cart = [
//     {id:1, productName: "Mobile Phone", price: 12000},
//     {id:2, productName: "Laptop", price: 22000},

// ]
// console.log(calculateCartPrice(cart));

// // console.log(calculateCartPrice(cart));

// function isEvenOrOdd(num)   
// {
//     if(num%2===0)
//     {
//         return "Even";
//     }   
//     return "Odd";
// }
// console.log(isEvenOrOdd(4));

// // console.log(isEvenOrOdd(7));
// // console.log(isEvenOrOdd(8));

// function findTarget(array, target)
// {
//     for(let i=0; i<array.length; i++)
//     {
//         if(array[i]===target)
//         {
//             return i;
//         }
//     }
// }

// const myArray = [1,3,5,7,9,11];
// console.log(findTarget(myArray, 7));

function findMyName(firstName)
{
    // if (firstName === undefined)
    // if(!firstName)
    if(firstName === undefined)
    {
      console.log("Plase enter your name");
      return;
    }
    return `${firstName} Enter Name right now`;
}
// console.log(findMyName("Sumit kashyap"));
// console.log(findMyName());

function calculateCartPrice1(val1,val2, ...num1)
{
    return num1;
}
// console.log(calculateCartPrice1(100,200,300,400));

const user = {
    username: "Sumit",
    price: 5000
}

function anyObject (anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// anyObject(user);
anyObject({
    username: "Sumit Kashyap",
    price: 299
})
const sumit = {
    username: 'sumit',
    // price: 5000,
    // product: 'mobile',
    // brand: 'apple',
    // collage: 'invertis University',
    // address: 'Bareilly',
    // state: 'Uttar Pradesh',
    // country: 'India',
    // village: 'Dauli',
    myarray0: [{ sumit: 'sumit' }],
    myarray1: [100, 200, 300, 400],
    myarray2: ['sumit', 'kashyap', 'is', 'a', 'good',]
}
console.table(sumit);

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100,299,399,499]));
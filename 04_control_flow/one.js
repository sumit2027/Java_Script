// const temperatur = 41
// if (temperatur === 41) {
//     console.log("less then 50");
    
// } else{
//     console.log("temperatur is grater than 50");
// }

//<,>,<=,>=,==,!=,===,!==

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000
// if (balance > 500) console.log("Yas"), console.log("yas2");
// if (balance < 500) {
//     console.log("less than 500");    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
    
// }

const userLogedIn = true
const userDebitCart = true
if (userDebitCart && userLogedIn && 2==3) {
    console.log("Allow to buy course");
    
}else{
    console.log("User not allow to buy course");
    
}
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged In"); 
} else{
    console.log("User not logged In"); 
}

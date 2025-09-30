// const useremail = "sumit123@.ai"
// const useremail = ""
// const useremail = []
// const useremail = {}
// const useremail = 458
// if (useremail) {
//     console.log("Got it emial");
// } else{
//     console.log("I have not email"); 
// }
// falsy values
// flase, 0,-0, BigInt 0n, "", null, undefined, NaN


// Truthyy values
// "0", 'flase', " ", [], {}, function(){},

// if (useremail.length === 0) {
//     console.log("Array is empty");   
// }

// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0) {
//     console.log("Object is empty"); 
// }

// Nullish Coalescing Oprator (??): null undefined
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniaty Operator

// condition ? true : false

const iceTrePrice = 100
iceTrePrice <= 80 ? console.log("less than 80") : console.log("more than 80");




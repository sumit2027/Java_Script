// var c = 200
let a = 300
 
if(true)
{
    let a = 10
    const b = 20
    // console.log("INNER:", a);
    
    // var c = 30
    // c = 30
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];   
// }
// console.log(a);

// console.log(a);
// console.log(b)


function one(){
    const username = "Sumit"
    
    function two(){
        const website = "Youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two();
    
}
one()

if (true) {
    const username = "sumit"
    if (username === "sumit") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));
// addone(5)
function addone(num){
    return num+1
}
// addone(5)

// addtwo(6)
const addtwo = function(num){
    return num+2
}
// addtwo(6)
console.log(addtwo);


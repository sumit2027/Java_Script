const user = {
    username:"sumit",
    price:999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username} , my website`); //normal function   
        // console.log(this);
        
    }

}
// user.welcomeMessage();
// user.username = "Ankit";
// user.welcomeMessage();
// console.log();

// function chai(){
//     const username = "Sumit";
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "Sumit";
//     console.log(this.username);
// }

const chai = () =>{
    let username = "Sumit";
    console.log(this);
}
// chai();

// const addtwo = (num1 ,num2) =>{
//     return num1 + num2;
// }

// const addtwo = (num1 ,num2) => num1 + num2;
// const addtwo = (num1 ,num2) => (num1 + num2);
const addtwo = (num1 ,num2) =>({username: "sumit"});
console.log(addtwo(2,3))
// const user = {
//     username: "Sumit",
//     address: "Bareilly",
//     logedIn: true,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("User details are save in date base");
//         console.log(`username:  ${this.username}`)     
//     }
// }
// console.log(user.username);
// console.log(user.getUserDelies());

const user = {
    username:"Hacker",
    loginCount: 12,
    isLoggedIn: true,

    usergetdate: function(){
        // console.log(`username: ${this.username}`); 
        // console.log(`address: ${this.address}`); 
        // console.log(`user login: ${this.login}`); 
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.usergetdate());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        // console.log(`Welcome ${this.greeting.username}`); 
    }
    return this;
}

const userOne = new User("Sumit", 12, true);
const userTwo = new User("Amit", 13, false);
console.log(userOne.constructor);
// console.log(userTwo);






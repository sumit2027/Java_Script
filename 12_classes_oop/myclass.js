//  ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   enctyptPassword() {
//     return `${this.password}123`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("sumit", "sumit@gmai.com", "hacker");
// console.log(chai.enctyptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.enctyptPassword = function(){
     return `${this.password}123`;
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`;
}

const tea = new User("sumit", "sumit@gmai.com", "hacker");
console.log(tea.enctyptPassword());
console.log(tea.changeUsername());


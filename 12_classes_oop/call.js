function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this, username)
    // this.username = username
    this.email = email
    this.password = password //apple@Sumit$123$
    // Apple@Iphone$123$
    
}
const chai = new createUser("sumit","sumit@gmail.com","123");
console.log(chai);

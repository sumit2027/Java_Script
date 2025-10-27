class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, password, email){
        // this.username = username;
        super(username)
        this.password = password;
        this.email = email;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("sumit","sumit@gmail.com","123")

chai.addCourse()
chai.logMe()
const masalChai = new User("Hacker")
masalChai.logMe()

console.log(chai instanceof Teacher);


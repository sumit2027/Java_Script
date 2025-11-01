class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
    static creatId(){
        return `123`
    }
}

const sumit = new User("sumit")
console.log(sumit.creatId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }

}

const iphone = new Teacher("iphone", "iphone@phone.com")
console.log(iphone.creatId());

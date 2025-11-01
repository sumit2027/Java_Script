class User{
    constructor(name, password,address,collage,email){
        this.name = name;
        this.password = password;
        this.address = address;
        this.collage = collage;
        this.email = email
    }
    get password(){
        //  return this._password.toUpperCase();
         return this._password+123+"Sumit".toUpperCase();
        // return `${this._password}Sumit`
    }
    set password(value){
        this._password = value; 
    }


    get email(){
        // return this._email.toUpperCase();
        // return this._email.toUpperCase();
        return `${this._email}SUMIT`
    }
    set email(value){
        this._email = value;
    }

}
const sumit = new User("Sumit", "ajdfn","Bareiily","Invertis","S@sumit.ai")
// console.log(sumit.collage);
console.log(sumit.password);
console.log(sumit.email);



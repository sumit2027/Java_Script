const User = {
    _email: "Sumit@sm.com",
    _password: "abcd",

    // define a getter and setter for the `email` property
    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
    get password() {
        // return this._password.toUpperCase();
        return this._password.toUpperCase()+"159";
    },
    set password(value) {
        this._password = value;
    }
}

const chai = Object.create(User)
// console.log(chai.email);
console.log(chai.password);



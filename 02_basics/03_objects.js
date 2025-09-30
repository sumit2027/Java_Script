const tinderUser =  new Object(); // Single tem object
console.log(tinderUser);

// const tinderUser2 = {}; //Non Single tem object
tinderUser.id = "123abc";
tinderUser.name = "Sumit";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "sumit123@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Sumit",
            lastName:"Kashayap",
        }
    }

}
// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
// const obj3 = {obj1, obj2}   // it will create object inside object
// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "sumit123@gmail.com"
    },
    {
        id:1,
        email: "sumit123@gmail.com"
    },
    {
        id:1,
        email: "sumit123@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
    courseName: "C Programming",
    coursePrice: "999",
    courseInstructor: "Sumit Kashayap"
}

// course.courseInstructor
const {courseInstructor: structor} = course
// console.log(courseInstructor);
console.log(structor);

const navber = () => {
    
}




// let myDate = new Date()
// console.log(myDate.toString()); //this is very good;
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2030,0,23);
// let myCreatedDate = new Date(2030,0,23, 5,3);

// let myCreatedDate = new Date("2025-09-06");

let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStam = Date.now()
// console.log(myTimeStam);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{weekday: "long"})
console.log(newDate);


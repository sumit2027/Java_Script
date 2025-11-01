const mynewobject = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(mynewobject);~


const chai = {
    name: "ginger chai",
    price: 125,
    isAvaible: true,

    orderChai: function (){
        console.log('Chai Nahi Bani');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(chai);

Object.defineProperty(chai, 'name',{
    //   writable: false, 
      enumerable: true,
    //   configurable: false,
    //   name: false,
    //   price: false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}






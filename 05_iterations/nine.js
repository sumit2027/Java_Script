const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc ,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
// return acc + currval
// },0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval,0)

console.log(myTotal);

const shoppinCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTopay = shoppinCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceTopay);


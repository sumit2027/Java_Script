// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values =coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//    return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
const books = [
    {title: 'Book One',genre: 'Fiction',punlish: 1982,edition: 2004},
    {title: 'Book Two',genre: 'Non-Fiction',punlish: 1983,edition: 2008},
    {title: 'Book Three',genre: 'History',punlish: 2000,edition: 2007},
    {title: 'Book Four',genre: 'Fiction',punlish: 1986,edition: 2010},
    {title: 'Book Five',genre: 'Science',punlish: 2084,edition: 2014},
    {title: 'Book Six',genre: 'Fiction',punlish: 1982,edition: 2010},
    {title: 'Book Seven',genre: 'History',punlish: 1989,edition: 2006},
    {title: 'Book Egisht',genre: 'Science',punlish: 2087,edition: 2016},
    {title: 'Book Nive',genre: 'Fiction',punlish: 1988,edition: 2020},
    {title: 'Book Eleven',genre: 'History',punlish: 1981,edition: 2025},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);


// const userBooks = books.filter( (bk) => bk.punlish >= 2000)
userBooks = books.filter( (bk) => {
return bk.punlish >= 1900 && bk.genre === 'History'})
console.log(userBooks);


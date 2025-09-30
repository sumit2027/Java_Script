const mervel_heros = ["Thor","Ironman","Spideramn"]
const dc_heros = ["Superman","Flash","Batman"]
const my_heroe = ["Mom","Dad","Brother","Siter","Wife"]

// mervel_heros.push(dc_heros)
// console.log(mervel_heros);
// mervel_heros.push(dc_heros)
// const allHeros = mervel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...mervel_heros, ...dc_heros, ...my_heroe]
// console.log(allHeros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Sumit"));
console.log(Array.from("Sumit"));
console.log(Array.from({name:"sumit"}));//intersting
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
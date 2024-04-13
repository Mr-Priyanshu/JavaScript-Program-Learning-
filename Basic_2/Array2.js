// let car = ["red", "blue", "White"];

// console.log(car);

// [ 'red', 'blue', 'White' ] OutPut 
// ------------------------------------------------------

// Array Part 2

const marvels_heros = ["Thor","Ironman","Hero"];

const dc_heros = ["superman","flash","batman"];

// marvels_heros.push(dc_heros);

// console.log(marvels_heros);

// [ 'Thor', 'Ironman', 'Hero', [ 'superman', 'flash', 'batman' ] ] Output
// ------------------------------------------------------------

// let heros = marvels_heros.concat(dc_heros);

// console.log(heros);

// [ 'Thor', 'Ironman', 'Hero', 'superman', 'flash', 'batman' ] Output  
// concat method 
// --------------
// //  Spread  Syntax  

// let heros1 = [...marvels_heros, ...dc_heros];

// console.log(heros1);

// [ 'Thor', 'Ironman', 'Hero', 'superman', 'flash', 'batman' ]  Output 
// -------------------  

let bol_heros = ["mogembo", "Sakal", "Gulati",["Prem", "Salim"], "Braj" ]

bol = bol_heros.flat()
console.log(bol);

// [ 'mogembo', 'Sakal', 'Gulati', 'Prem', 'Salim', 'Braj' ]   Output 




//1158411

const numbers = [10, 4, 100, -5, 54, 2]
const numbersLength = numbers.length

let sumNumbers = 0

//for
/* 
for (let i = 0; i < numbersLength; i += 1) {
   console.log('i', i)
   sumNumbers += numbers[i] ** 3
}
console.log('sumNumbers', sumNumbers)
*/



//for of
/*
for (const items of numbers) {
   sumNumbers += items ** 3
}
console.log('sumNumbers', sumNumbers)
*/



//forEach
/*
numbers.forEach((items) => {sumNumbers += items ** 3})
console.log('sumNumbers', sumNumbers)
*/



//reduce
numbers.reduce((acc, items) => {
   sumNumbers += items ** 3
}, 0)
console.log('sumNumbers', sumNumbers)
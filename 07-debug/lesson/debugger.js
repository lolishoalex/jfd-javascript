// debugger - по сути это замена метки в строке

let sum = 0;
debugger;
const numberOfElements = 10;
for (let i = 1; i < numberOfElements; i += 1) {
    debugger;
    sum += i;
}
const theHalfOfSum = sum / 2;
console.log('theHalfOfSum', theHalfOfSum);
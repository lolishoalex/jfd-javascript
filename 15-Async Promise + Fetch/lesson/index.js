//Синхронный код --- 
//это значит что код выполняется 
//пошагово от первой до последней строки

const numberOfElements = 50
console.log('Start of cycle');
for (let i = 0; i < numberOfElements; i += 1) {
    console.log('i', i);
}
console.log('Finish of cycle');
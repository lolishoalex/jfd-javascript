//Что такое деструктиризация для массивов и для объектов

function calcValues(a, b) {
    return [
        a + b,
        //undefined,
        a - b,
        a * b,
        a / b
    ]
}
//console.log(calcValues(42, 10))
//const result = calcValues(42, 10)
//const sum = result[0]
//const sub = result[1]
//console.log(sum, sub)

// сокращаем код - деструктиризация

const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10) //применяем оператор rest ...
console.log(sum, mult, other, sub)
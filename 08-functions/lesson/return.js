// Как возвращать значение из функции
// значение которое возвращаем нужно сохранить в переменную

const multiplyByFive = (number) => {
    return number * 5
}

const result = multiplyByFive(10)
console.log('result', result)

// второй способ возвращать значение, он более короткий
// этот способ можно использовать тогда когда тело функции состоит из одной строчки

const multiplyByFive1 = (number) => number * 5;

const result1 = multiplyByFive1(100)
console.log('result1', result1)
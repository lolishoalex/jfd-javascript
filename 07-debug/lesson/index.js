// Debug c помощью console.(log) - его нужно проставлять в ключевых точках кода, чтобы проверять, какая переменная выводится в данный момент

let sum; // 3 присваиваем переменно значение 0 - баг исправлен
console.log('initial sum', sum); // 2 добавляем console.(log) для проверки
const numberOfElements = 10;
for (let i = 1; i < numberOfElements; i += 1) {
    console.log('i /sum', i, sum); // 1 добавляем console.(log) для проверки
    sum += i;
}
const theHalfOfSum = sum / 2;
console.log('theHalfOfSum', theHalfOfSum);

// в консоль выводится NaN. Это неверно, должно выводится число.
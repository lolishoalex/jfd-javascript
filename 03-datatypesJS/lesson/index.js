// 1 string - строка
const favoriteDrink = 'Coffee';
console.log(favoriteDrink);

// 2 number - число
const numberOfCups = 5;
console.log(numberOfCups);

// 3 bulean имеет 2 значения true/false
const isColdDrink = false;
console.log(isColdDrink);

// 4 null - значение пусто или не известно
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

// 5 undefined - значение небыло присвоено
let carOwner = undefined;
console.log(carOwner);

// 6 object - сложный тип данных
const drink = {
    favoriteDrink: 'Coffee',
    numberOfCups: 5,
    isColdDrink: true,
    // key: value,
}
console.log(drink);

// 7 symbol - нужен для создания уникальных ключей объкта
const id = Symbol('id');
console.log(id);

// 8 bigint - большое число, не может быть больше чем 2^53 - 1 или меньше такого же числа - (2^53 - 1)
const bigIntNumber = BigInt(10); // или const bigIntNumber = 10n;
console.log(bigIntNumber); //10n - n означает что єто число bigint

// ТИПЫ ДАННЫХ БЫВАЮТ ДВУХ ТИПОВ 
// 1 ПРИМИТИВЫ (ПРОСТЫЕ ТИПЫ ДАННЫХ) - 7
// 2 НЕ ПРИМИТИВЫ (СЛОЖНЫЕ ТИПЫ ДАННЫХ) - 1 (object)

// Почему object является сложным типом данных - он позволяет хранить несколько значений
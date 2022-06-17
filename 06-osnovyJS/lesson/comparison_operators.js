// ОПЕРАТОРЫ СРАВНЕНИЯ >, <, >=, <=, ==, ===

// Сравнение чисел

console.log(5 > 10);
console.log(5 < 10);
console.log(5 <= 5);
console.log(5 >= 6);
console.log('==', 100 == 100);

// Сравнение строк

console.log('JavaScript' == 'Javascript'); // сравниваются коды символов
console.log('JavaScript' > 'Javascript');
console.log('JavaScript' < 'Javascript');
// проверка кода символа
console.log('S', 'S'.charCodeAt()); // 83
console.log('s', 's'.charCodeAt()); // 115

console.log('javaScript' > 'JavaScript');
console.log('j', 'j'.charCodeAt()); // 106
console.log('J', 'J'.charCodeAt()); // 74

// == VS ===

// == - сравнивает значения - включает преобразование типов данных

console.log('1' == 1); // true
console.log('1' >= 1); // true
console.log('20' == '20'); // true
console.log('200' > '21'); // false - останавливает подсчет на различии
console.log('0', '0'.charCodeAt()); // 48
console.log('1', '1'.charCodeAt()); // 49
console.log(true == 1); // true
console.log(false == 0); // true

// === - сравнивает типы - не включает преобразование типов данных

console.log('1' === 1); // false - разные типы
console.log(1 === 1); // true - одинаковые типы
console.log(true === 1); // false
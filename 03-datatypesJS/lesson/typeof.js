// КАК ОПРЕДЕЛИТЬ ТИП ДАННЫХ У ПЕРЕМЕЕНОЙ для этого существует typeof
// с typeof можно работать двумя способами

// 1 способ это работать с typeof как с функцией
typeof('Olga');

// 2 способ без скобок - это дело вкуса
typeof 'Olga';

console.log(typeof 'Olga');
console.log(typeof 5);
console.log(typeof Symbol('id'));
console.log(typeof undefined);
console.log(typeof 100n);
console.log(typeof console);

// typeof не всегда показывает правильный тип двнных - исключения
console.log(typeof null); // выводит object
console.log(typeof console.log); // typeof от функции выводит не существующий тип данных - function

// Методы toUpperCase (преобразует все символы строчки в большие символы) toLowerCase (преобразует все символы строчки в маленькие символы)

const animal = 'Lion';
console.log('upper', animal.toUpperCase()); // toUpperCase как и toLowerCase - это функции, чтобы вызвать нужны круглые скобки
console.log('lower', animal.toLowerCase()); 
// Методы toUpperCase и toLowerCase не изменяют переменную, они возвращают новые строки
console.log('animal', animal); // проверяем

// Как находить символы строки - методы indexOf, includes

// indexOf

const text = 'Мой любимый язык программирования JavaScript';
console.log('indexOf', text.indexOf('JavaScript'));
console.log('indexOf', text.indexOf('1234')); // текст не существующий с нашей строке, получим -1
console.log('indexOf', text.indexOf('о')); // поиск посимвольно, indexOf - находит толко первый элемент

// includes похож на indexOf, но возвращает булевые значения

console.log('includes', text.includes('JavaScript')); // true
console.log('includes', text.includes('555')); // false - поиск не существующего текста 

// Обрезка строки - slice, substring

// Обрезка строки методом slice

const progLang = 'JavaScript';
console.log('slice', progLang.slice(3 , 7)); // с круглые скобки указываются 1 или 2 числа, первое число это индекс с которого начинается обрезка, второе число обозначает конечный индекс - окончание обрезки
console.log('slice', progLang.slice(3)); // второй параметр не обязателен
console.log('slice', progLang.slice(1, 5));


// Обрезка строки методом substring

console.log('substring', progLang.substring(1, 5)); // также нужны 2 параметра - начало и конец обрезки
// оба способа работают одинаково

// Замена символов в строке - методы replace, replaceAll

const progLang1 = 'JavaScript';
console.log('replace', progLang.replace('Java', '123')); // 2 параметра - строка, которую хотим удалить, и строка на которую хотим заменить
console.log('replace', progLang.replace('a', 'A')); // заменяет только первое совпадение

console.log('replaceAll', progLang.replaceAll('a', 'A')); // заменяет все буквы

// Метод повтора строчки - repeat

const helloText = 'Hello';
console.log('repeat', helloText.repeat(5)); // один параметр - количество раз повторений

// Метод обрезки - trim
const nameOfUser = prompt('Как Вас зовут?');
console.log('nameOfUser', nameOfUser.trim()); // trim не принимает никаких параметров
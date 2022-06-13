// Способы объявления строк - 3 способа объявления строк с помощью кавычек

const name1 = 'Olga';
const name2 = "Olga";
const name3 = `Olga`;

console.log(name1);
console.log(name2);
console.log(name3);

// Как объединять несколько строк в одну

const name = 'Olga';
const profession = 'JavaScript-developer';

// Есть 2 способа объединеия строк

// 1 способ с помощью +

const allInfo = name + ' ' + profession;
console.log(allInfo);

// 2 способ с помощью обратных кавычек ``

const allInfo1 = `${name} ${profession}`;
console.log(allInfo1);

// Длина строки и получение символов из строки

const programingLang = 'JavaScript 1234'; // получаем длину даной строки, для этого есть специальный параметр - length
console.log('length', programingLang.length);

console.log('1st', programingLang[5]); // получаем символы даной строки, изменять символы строки мы не можем
// ; не имеет значения, но нужно выбрать вариант с ней или без нее

console.log('Hello World1'); // работает 

console.log('Hello World2') // тоже работает 

// ПРОБЕЛЫ - в JS не учитываются
         console.log('Hello World3');
    console.log('Hello World4');

// КОММЕНТАРИИ 2 ТИПА // - ОДНА СТРОКА, /**/ - БЛОК СТРОК

// console.log('Hello World5');


/* console.log('Hello World5');
console.log('Hello World5');
console.log('Hello World5');
console.log('Hello World5');
console.log('Hello World5');*/

// ПЕРЕМЕННЫЕ 3 типа - var(устаревшая), let, const

var text = 'Hello World5';
text = 'Hello';
console.log(text);

let Name = 'Lola'; //можно переопределить, то есть присвоить новое значение
Name = 'Olga';
console.log(Name);

const ProgrammingLang = 'JavaScript'; //нельзя переопределить
console.log(ProgrammingLang);
// ProgrammingLang = 'Java'; будет ошибка

// JavaScript - регистрозависимый язык, есть большая разница между большой буквой и маленькой

console.log(Name);
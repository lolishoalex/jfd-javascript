// Логические конструкции

// if
// if else
// switch case
// ? :

// if - нужен для проверки значения на условие

let isFrontEndDeveloper = true;
if (isFrontEndDeveloper) {
    console.log('Вы Front-end Разработчик. Добро пажаловать в команду!');
}

isFrontEndDeveloper = false;
if (isFrontEndDeveloper) {
    console.log('Вы Front-end Разработчик. Добро пажаловать в команду!');
}

isFrontEndDeveloper = false;
if (isFrontEndDeveloper) {
    console.log('Вы Front-end Разработчик. Добро пажаловать в команду!');
} else  { // выполняется если if = false
    console.log('Вы не Front-end Разработчик.');
}

isFrontEndDeveloper = true;
if (isFrontEndDeveloper) {
    console.log('Вы Front-end Разработчик. Добро пажаловать в команду!');
} else  { // выполняется если if = false
    console.log('Вы не Front-end Разработчик.');
}


let closingTime = 8;
let currentTime = 9;

if (currentTime > closingTime) {
    console.log('Магазин закрыт.');
}

closingTime = 8;
currentTime = 5;

if (currentTime > closingTime) {
    console.log('Магазин закрыт.');
} else {
    console.log('Магазин открыт. Приходите за покупками!');
}

// if else

let developerJobType = 'Front-end';

if (developerJobType === 'Front-end') {
    console.log('2000$');
} else if (developerJobType === 'Back-end') {
    console.log('1500$');
} else if (developerJobType === 'Full-stack') {
    console.log('3500$');
} else {
    console.log('Зарплата не определена.');
}

developerJobType = 'Full-stack';

if (developerJobType === 'Front-end') {
    console.log('2000$');
} else if (developerJobType === 'Back-end') {
    console.log('1500$');
} else if (developerJobType === 'Full-stack') {
    console.log('3500$');
} else {
    console.log('Зарплата не определена.');
}

developerJobType = '';

if (developerJobType === 'Front-end') {
    console.log('2000$');
} else if (developerJobType === 'Back-end') {
    console.log('1500$');
} else if (developerJobType === 'Full-stack') {
    console.log('3500$');
} else {
    console.log('Зарплата не определена.');
}

// switch case - замена if else 

developerJobType = 'Front-end';

switch (developerJobType) {
    case 'Front-end':
        console.log('2000$');
        break;
    case 'Back-end':
        console.log('1500$');
        break;
    case 'Full-stack':
        console.log('3500$');
        break;
    default: 
        console.log('Зарплата не определена.');
}

developerJobType = 'Back-end';

switch (developerJobType) {
    case 'Front-end':
        console.log('2000$');
        break;
    case 'Back-end':
        console.log('1500$');
        break;
    case 'Full-stack':
        console.log('3500$');
        break;
    default: 
        console.log('Зарплата не определена.');
}

developerJobType = '';

switch (developerJobType) {
    case 'Front-end':
        console.log('2000$');
        break;
    case 'Back-end':
        console.log('1500$');
        break;
    case 'Full-stack':
        console.log('3500$');
        break;
    default: 
        console.log('Зарплата не определена.');
}

// ? : - замена if else для оптимизации кода

let favoriteDrink = 'Coffee';
let message = '';

if (favoriteDrink === 'Coffee') {
    message = 'Ваш любимый напиток - это кофе.';
} else {
    message = 'Вы скорее всего любите чай.';
}
console.log('message', message);


message = favoriteDrink === 'Coffee'
    ? 'Ваш любимый напиток - это кофе.'
    : 'Вы скорее всего любите чай.';
console.log('message', message);

message = favoriteDrink === ''
    ? 'Ваш любимый напиток - это кофе.'
    : 'Вы скорее всего любите чай.';
console.log('message', message);

// ? это if
// : это else
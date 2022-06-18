// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ - СУЩЕСТВУЕТ ТРИ 
// && ЛОГИЧЕСКОЕ И
// || ЛОГИЧЕСКОЕ ИЛИ
// !  ЛОГИЧЕСКОЕ НЕ

// && ЛОГИЧЕСКОЕ И

let userAge = 16;
if (userAge > 5 && userAge <= 18) { // true - оба выражения должны быть правда
    console.log('The user are in school');
}

userAge = 20;
if (userAge > 5 && userAge <= 18) { // false
    console.log('The user are in school');
}

let progLang = 'JavaScript';
let expInYears = 2;

if (progLang === 'JavaScript' && expInYears > 1) { // true
    console.log('You are welcome in our company!');
}

progLang = 'JavaScript';
expInYears = 0.5;

if (progLang === 'JavaScript' && expInYears > 1) { // false
    console.log('You are welcome in our company!');
}

// || ЛОГИЧЕСКОЕ ИЛИ

let currentHours = 10;
if (currentHours < 8 || currentHours > 20) { // вся конструкция false
    console.log('We are closed! See you tomorrow.');
} else {
    console.log('You are welcome in our office!');
}

currentHours = 6;
if (currentHours < 8 || currentHours > 20) { // если хоть одно условие будет true, то все будет true
    console.log('We are closed! See you tomorrow.');
} else {
    console.log('You are welcome in our office!');
}

// Значения которые были получены с помощью && и || можно сохранять в переменные

let userNickname = null;
let defoltNickname = 'User';
let nickname = userNickname || defoltNickname || 'noname';
console.log('nickname:', nickname);

userNickname = null;
defoltNickname = '';
nickname = userNickname || defoltNickname || 'noname';
console.log('nickname:', nickname); 
// если значение false, то выполнение кода идет дальше, пока не найдет значение с true

let finalNickname = userNickname && 'User are existing';
console.log('finalNickname:', finalNickname);

userNickname = 'Olga';
finalNickname = userNickname && 'User are existing';
console.log('finalNickname:', finalNickname);
// если значение false, то оно и возвращается, если значение true, то выполнение продолжается

// !  ЛОГИЧЕСКОЕ НЕ 

let hasAccess = true;
console.log('!hasAccess', !hasAccess); //выводит противоположное значение
if (!hasAccess) {
    console.log('Access denided');
} else {
    console.log('Access confirmed');
}

hasAccess = false;
console.log('!hasAccess', !hasAccess);
if (!hasAccess) {
    console.log('Access denided');
} else {
    console.log('Access confirmed');
}

let answer = prompt('How old are you?');
if (!answer) {
    alert('Add your age');
} else {
    alert(`You are ${answer} years old`);
}

// Оператор объединения с null - ??

console.log(false || 'Hello World'); 
// false, 0, '', NaN, undefined, null - ложные значения для оператора ||

console.log(false ?? 'Hello World');
// undefined, null - ложные значения для оператора ??

console.log(null || 'Hello World');
console.log(null ?? 'Hello World');

console.log('' || 'Hello World');
console.log('' ?? 'Hello World');
let userName = prompt('Как вас зовут?');
let userAge = prompt('Сколько вам лет?');
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName.toLowerCase().trim()} и вам ${userAge} лет`);
console.log(userAge, typeof userAge);
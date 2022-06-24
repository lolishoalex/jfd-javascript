let pass = prompt('Введите пароль');
pass = pass.trim();

let isNumberContain = false;
console.log(pass.length);
console.log(isNumberContain)

for (let i = 0; i < pass.length; i++) {
    let testChar = Number(pass[i]);
    console.log(testChar)
    if (!isNaN(testChar)) {
        isNumberContain = true;
        console.log(isNumberContain)
        break;
    }
}
console.log(isNumberContain)

if (isNumberContain === false) {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
    throw new Error("Stop script");
}
console.log(isNumberContain)

if (pass.length < 3 || pass.length > 21) {
    console.log(pass.length);
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
    throw new Error("Stop script");
}   else if (pass === pass.toLowerCase()) {
    console.log(pass.toLowerCase());
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
    throw new Error("Stop script");
}
alert('Пароль валидный. Добро пожаловать в аккаунт!');
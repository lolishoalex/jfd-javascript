const existedUserLogin  = 'the_best_user';
const existedUserPassword  = '12345678';

let userLogin   = prompt('Введите логин');
let userPassword   = prompt('Введите пароль');

userLogin = userLogin.trim();
userPassword = userPassword.trim();

if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}
let clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
let clientSpentToday = prompt('Сколько клиент потратил сегодня?');
clientSpentForAllTime = Number(clientSpentForAllTime);
console.log(typeof clientSpentForAllTime, clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);
console.log(typeof clientSpentToday, clientSpentToday);

if (isNaN(clientSpentForAllTime) || isNaN(clientSpentForAllTime)) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
    throw new Error("Stop script");
}   else if (clientSpentForAllTime === 0 || clientSpentToday === 0) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
    throw new Error("Stop script");
}

let discount = 0;
const discount0 = 0;
const discount1 = 10;
const discount2 = 20;
const discount3 = 30;



if (clientSpentForAllTime < 100) {
    discount = discount0;
}   else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = discount1;
}   else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = discount2;
}   else if (clientSpentForAllTime >= 500) {
    discount = discount3;
}
alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentToday = clientSpentToday - (clientSpentToday*(discount/100));
clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
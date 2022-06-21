const clientName = 'Игорь';
let clientSpentForAllTime = 510;
let clientSpentToday = 25;
let discount = 0;
const discount0 = 0;
const discount1 = 10;
const discount2 = 20;
const discount3 = 30;

if (clientSpentForAllTime < 100) {
    alert('Вам не предоставляется скидка!');
    discount = discount0;
}   else if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
    alert(`Вам предоставляется скидка в ${discount1}%!`);
    discount = discount1;
}   else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
    alert(`Вам предоставляется скидка в ${discount2}%!`);
    discount = discount2;
}   else if (clientSpentForAllTime >= 500) {
    alert(`Вам предоставляется скидка в ${discount3}%!`);
    discount = discount3;
}

clientSpentToday = clientSpentToday - (clientSpentToday*(discount/100));
clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
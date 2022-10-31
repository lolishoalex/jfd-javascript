//Асинхронный код --- 
//например получение данных с сервера,
//мы не знаем когда прийдут данные, 
//поэтому асинхронный код не может выполняться пошагово.
//Асинхронный код нужно обрабатывать.

const developer = {
    name: 'Maxim',
    isJsDev: true,
};

//Асинхронные сущности

//setTimeout принимает в себя 2 параметра
//1 колл-бэк () => {}
//2 кол-во миллисекунд

setTimeout(() => {
    console.log('setTimeout');
}, 3000);


console.log(developer);//проверка на асинхронность


//setInterval - работает похожим образом,
//но вызывается каждый раз через указанный интервал времени

setInterval(() => {
    console.log('setInterval');
}, 1000);
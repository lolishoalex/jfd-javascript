//Асинхронный код --- 
//например получение данных с сервера,
//мы не знаем когда прийдут данные, 
//поэтому асинхронный код не может выполняться пошагово.
//Асинхронный код нужно обрабатывать.

const developer = {
    name: 'Maxim',
    //isJsDev: false,
    isJsDev: true,
};

//Асинхронные сущности

//setTimeout принимает в себя 2 параметра
//1 колл-бэк () => {}
//2 кол-во миллисекунд

setTimeout(() => {
    //console.log('setTimeout');
}, 3000);


console.log(developer);//проверка на асинхронность


//setInterval - работает похожим образом,
//но вызывается каждый раз через указанный интервал времени

setInterval(() => {
    //console.log('setInterval');
}, 1000);



//Promise - для создиния промиса необходимо указать 
//new Promise(() => {})
//коллбэк промиса принимает в себя 2 параметра: resolve, reject
//resolve - это ф-я, которая вызывается если промис был выполнен успешно
//reject - это ф-я, которая вызывается если промис был выполнен с ошибкой
//У Promise есть три статуса:
//pending - ожидание
//fullfilled - выполнен
//rejected - ошибка


const promise = new Promise((resolve, reject) => {
    if (developer.isJsDev) {
        setTimeout(() => {
            resolve(`${developer.name} is JavaScript developer`);
        }, 3000);
    } else {
        reject(`${developer.name} is NOT JavaScript developer`)
    }
});

console.log(promise);
/* На этом этапе промис находится в pending статусе
чтобы получить данные, которые мы передавали, необходимо 
обработать промис.
Для этого есть нметоды:
then - принимает в себя коллбэк, получает данные промиса
catch - принимает в себя коллбэк, для обработки ошибок промиса (reject)
finally - принимает в себя коллбэк */

promise
    .then((successMassage) => {
        console.log('successMassage:', successMassage);
    })
    .catch((error) => {
        console.log('error:', error);
    })
    .finally(() => {
        console.log('finally');
    })
/* этот then будет вызываться когда у нас будет выполняться resolve
в случае если сработал reject, в консоли появляется ошибка,
которая будет мешать дальнейшему выполнению кода, в этом случае 
используем catch */
/* finally - вызывается в последнюю очередь, при чем не важно произошла
ошибка или нет */
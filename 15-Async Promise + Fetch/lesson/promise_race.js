/* Метод Promise.race принимает в себя массив который
состоит из списка промисов

Promise.race возвращает самый быстро выполненны промис, при чем
не важно какой у него будет статус fullfilled или rejected

Promise.race([
    new Promise(),//fullfilled
    new Promise(),//rejected => catch
    new Promise(),//дальше не выполнится
]);

*/

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise1')
    }, 500);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise2')
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('promise3')
        reject('promise3')
    }, 1000);
});

Promise.race([promise1, promise2, promise3])
   .then((result) =>{
        console.log('result', result);
   })
   .catch((error) =>{
    console.log('error', error);
    }) 
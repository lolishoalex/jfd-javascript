//Event Loop. Макрозадачи и микрозадачи. Очередь микрозадач

//microtasks

/* 
Есть еще одна очередь, которая еще более приоритетна,
чем Callback queue. Это Micro Task Queue, то есть
очередь микро задачь.

Микрозадачи в JS это тот код который находится внутри:
then, catch, finally
*/

// 1 Lets start
// 2 I am in promise!
// 3 Lets finish
// 4 Returne result from promise
// 5 Hello! I am in setTimeout!
// 6 I am in setTimeout too, but waiting longer

console.log('Lets start')//1

setTimeout(() => {
    console.log('Hello! I am in setTimeout!')//5
}, 1000)

const promise = new Promise((resolve) => {
    console.log('I am in promise!')//2

    resolve('Returne result from promise')//4 - обрабатывается тогда, когда мы прописываем then
})

setTimeout(() => {
    console.log('I am in setTimeout too, but waiting longer')//6
}, 2000)

promise.then((result) => {
    console.log(result)//4
})

console.log('Lets finish')//3

/* 
Порядок вызова у Event loop с микрозадачами:

1 Выполняется мАкрозадача 
(самая главная мАкрозадача в JS это выполнение всего кода)

2 Вызвать все что есть в очереди мИкрозадач
 - Micro Task Queue

3 Вызвать все что есть в очереди вызовов
 - Callback queue
 
 Когда появляется новая мАкрозадача, цикл повторяется.
*/





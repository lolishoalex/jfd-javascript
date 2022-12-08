//Event Loop. Макрозадачи и микрозадачи. Очередь микрозадач

//microtasks

/* 
Есть еще одна очередь, которая еще более приоритетна,
чем Callback queue. Это Micro Task Queue, то есть
очередь микро задачь.

Микрозадачи в JS это тот код который находится внутри:
then, catch, finally
*/

console.log('Lets start')

setTimeout(() => {
    console.log('Hello! I am in setTimeout!')
}, 1000)

const promise = new Promise((resolve) => {
    console.log('I am in promise!')

    resolve('Returne result from promise')
})

setTimeout(() => {
    console.log('I am in setTimeout too? but waiting longer')
}, 2000)

promise.then((result) => {
    console.log(result)
})

console.log('Lets finish')

/* 
Порядок вызова у Event loop с микрозадачами:

1 Выполняется мАкрозадача 
(самая главная мАкрозадача в JS это выполнение всего кода)

2 Вызвать все что есть в очереди мИкрозадач
 - Micro Task Queue

3 Вызвать все что есть в очереди вызовов
 - Callback queue
 3я минута 
*/





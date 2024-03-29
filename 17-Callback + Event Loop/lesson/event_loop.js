//Event Loop. Что такое Call Stack
//Event Loop. Что такое Очередь Вызовов (Callback queue)

/* Event Loop(событийный цыкл) - это бесконечный цыкл,
в котором движек JS ожидает задачи, выполняет задачи,
и снова ждет новые задачи.
У Event Loop есть свой порядок выполнения и некоторые 
правила. */

/*
У движка JS есть сущность, которая называется Call Stack,
то есть перечень или блок вызовов.
Принцип работы такой: эл-нт который первый вошел,
выйдет последним.
Последовательность действий такая:
1 добавить в стек
2 запустить код
3 удалить из стека
*/


function sayHello(name) {
    console.log(`Hello ${name}`)
}

//код будет вызываться попорядку, строчка за строчкой
console.log('start')
sayHello('Olya')
sayHello('Tony')
sayHello('Any')
console.log('end')


//код будет вызываться НЕ попорядку
/* сначала Event Loop отработает синхронный код,
то есть Call Stack, а потом Web Api, то есть 
Callback queue. */

console.log('start')
sayHello('Olya')
setTimeout(() => {
    sayHello('Tony')//выведется в конце
}, 0)
sayHello('Any')
console.log('end')

/* 
setTimeout и setInterval (Web Api)
- это ф-ции которых нет в JS,
их нам предоставляет браузер. 
Для этих ф-ций есть специальная сущность, которая их
обрабатывает, она называется Callback queue либо 
очередь вызовов. 
Работает по принципу обычной очереди - первый вошел 
и первый вышел.
Есть еще одна очередь, которая еще более приоритетна,
чем Callback queue. Это Micro Task Back Queue, то есть
очередь микро задачь.
*/




















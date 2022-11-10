//Конструкция Async Await

/* Ключевое слово async используется для создания ф-ции.
Чтобы сделать ф-ю асинхронной, перед ней нужно написать async.
Ф-я перд которой указано слово async, автоматически возвращает 
промис.
Await - обрабатывает асинхронные запросы, слово await добавляется 
перед словом fetch, если ф-я является асинхронной.
Await застявляет ф-ю ожидать пока она не выполнится,
пока ф-я не выполнится код не будет выполняться дальше. */

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosWithUserData = async () => {
    const response = await fetch(USERS_URL)
    console.log('response', response)
}

const promise = getTodosWithUserData()
console.log('promise', promise)

//закончила на 9-ой минуте

































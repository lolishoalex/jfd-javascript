//Конструкция Async Await

/* Ключевое слово async используется для создания ф-ции.
Чтобы сделать ф-ю асинхронной, перед ней нужно написать async.
Ф-я перд которой указано слово async, автоматически возвращает 
промис.
Await - обрабатывает асинхронные запросы, слово await добавляется 
перед словом fetch, если ф-я является асинхронной.
Await застявляет ф-ю ожидать пока она не выполнится,
пока ф-я не выполнится код не будет выполняться дальше. */

/* Как обрабатываются ошибки в асинхронном коде
try catch finally - они работают почти так же 
как the catch finally 

try {

} catch (error){
    console.log('error', error)
} finally {
    console.log('finally')
}
*/

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL)
        if (!response.ok) {//обрабатываем ошибки вручную
            throw new Error('Ошибка в получении данных о пользователях')
        }
        console.log('response', response)
        const users = await response.json()//асинхронная операция - нужен await
        console.log('users', users)
        const firstUserId = users[0]?.id//синхронная операция - НЕ нужен await
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
        if (!todosResponse.ok) {//обрабатываем ошибки вручную
            throw new Error('Ошибка в получении данных о задачах')
        }
        const todos = await todosResponse.json()
        console.log('todos', todos)
    } catch (error){
        console.log('error', error)
    } finally {
        console.log('finally')
    }
}

const promise = getTodosWithUserData()
console.log('promise', promise)



































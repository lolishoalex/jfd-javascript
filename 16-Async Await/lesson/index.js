/* проблематика then catch finally - код всегда растет вправо 
при каждом новом запросе на получение данных.
Конструкция Async Await помогает избавиться от этого*/

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

fetch(USERS_URL)//второй параметр а именно объект тут не обязателень так как по умолчанию fetch работает на получение данных
    .then((response) => response.json())
    .then((users) => {
        console.log('users', users)
        const firstUserId = users[0]?.id
        console.log('firstUserId', firstUserId)
        fetch(`${TODOS_URL}?userId=${firstUserId}`)
            .then((response) => response.json())
            .then((todos) => {
                console.log('todos', todos)
            })
            .catch((error) => {
                console.log('error', error)
            })
    })
    .catch((error) => {
        console.log('error', error)
    })





























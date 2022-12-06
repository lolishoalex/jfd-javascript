//Что такое callback и как его использовать в коде

/* callback это ф-я, которая передана в качестве параметров
в другую ф-ю
Конструкция колл бэка () => {}
 */

//примеры использования кол бэков

const promise = new Promise(() => {})

setTimeout(() => {}, [])

//как использовать кол бэки для асинхронных задач

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1'

const getTodo = (callback) => {
    fetch(FIRST_TODO_URL)
        .then((response) => response.json())
        .then((todo) => {
            //console.log('todo', todo)
            callback(todo)
        })
        .catch((error) => {
            console.log('error', error)
        })
}

// getTodo((todoItem) => {
//     console.log('todoItem', todoItem)
//     getTodo((todoItem) => {
//         console.log('todoItem', todoItem)
//         getTodo((todoItem) => {
//             console.log('todoItem', todoItem)
            
//         })
//     })
// })

/* кол бэки это не всегда хорошо,
потому что из-за них код всегда растет справо */
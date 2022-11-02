/* Метод Promise.all принимает в себя массив который состоит из списка промисов
Promise.all возвращает промис, который будет выполнен тогда, когда
все промисы переданные в качестве массива, будут выполнены успешно,
либо когда хотябы один промис будет выполнен как rejected

Promise.all([
    new Promise(),//fullfilled
    new Promise(),//rejected => catch
    new Promise(),//дальше не выполнится
]);

Promise.all будет возвращать статус fullfilled, когда все данные промисы
будут выполены со статусом fullfilled.
Promise.all будет возвращать статус rejected, когда хотя бы один из данных
промисов будет со статустом rejected. 
После того как будет выведен rejected, следующие промисы выполняться не будут,
а управление перейдет в блок catch.
*/

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const todosIds = [43, 10, 5, 100, 101];
const dataContainer = document.querySelector('#data-container')

const createTodoElem = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAncor = document.createElement('a');
    todoElementAncor.href = '#';
    todoElementAncor.textContent = text;
    todoElement.append(todoElementAncor);

    return todoElement;
}

const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((todos) => {
            console.log('todos', todos);
            todos.forEach(todo => {
                const todoHtml = createTodoElem(todo.title);
                dataContainer.append(todoHtml)
            });
        })
        .catch((error) => {
            console.log('error', error);
        })
};

getTodosByIds(todosIds);























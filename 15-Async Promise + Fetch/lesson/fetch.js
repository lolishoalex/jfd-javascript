/* fetch - это ф-я с помощью которой 
мы можем получать данные по url. 
fetch возвращает promise.
fetch() принимает в себя 2 параметра, url и объект с 
настройкой нашего запроса, в объекте есть важное поле method,
в поле method можно указывать:
GET - получение данных, он установлен по умолчанию
POST - отправка
DELETE - удаление
итд...
*/

const TODOD_URL = 'https://jsonplaceholder.typicode.com/tods'

//выводим наши задачи в html
const createTodoElem = (text) => {
    
}

const getAllTodos = () => {
    const result = fetch(TODOD_URL, {
        method: 'GET',
    })
    console.log(result);
    
    result
        .then((response) => {//декодирование в формате json (есть и другие форматы)
            console.log('response', response);
            //важно посмотреть строку ok: false, и поправляем это вручную
            if (!response.ok) {//если условие действительно, тогда выбрасываем ошибку с помощью оператора throw
                throw new Error('Ошибка запроса')
            }
            return response.json();
            //return response.text();
        })
        .then((todos) => {//при успешном выполнении наш fetch вернет нам список задачь
            console.log('todos', todos);
        })
        .catch((err) => {//при асинхронных запрсах обязательно нужно обрабатывать ошибку
            console.log('err', err);
        })
        //.finally тут не обязателен
};


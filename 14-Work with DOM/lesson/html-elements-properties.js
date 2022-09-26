//Свойства и методы HTML-элементов
//рассмотрим как получать значения класса
//значения класса мы можем изменять

const tasksWrapper = document.querySelector('.tasks__wrapper')
console.log(tasksWrapper.className)

//tasksWrapper.className = 'tasks__wrapper_1' //изменяем значение класса - изменения могут ломать верстку
//console.log(tasksWrapper.className)

//рассмотрим как получать значения id
//значения id мы тоже можем изменять

const tasksBlock = document.querySelector('#tasks')
console.log(tasksBlock.id)

//tasksBlock.id = 'new_tasks' //изменяем значение id - изменения могут ломать верстку
//console.log(tasksBlock.id)

//Как изменить содержимое эл-та

const submitButton = document.querySelector('.create-task-block__button')
console.log(submitButton.innerText)//получаем контент внутри кнопки
console.log(submitButton.textContent)//аналог - получаем контент внутри кнопки

//submitButton.textContent = '<b>Создать новую задачу</b>'//меняем контент кнопки - textContent не обработает тег
submitButton.innerHTML = '<b>Создать новую задачу</b>'//меняем контент кнопки - innerHTML обработает тег

//Как получить весь html - innerHTML(выводит всю верстку в виде строки)
//также мы можем изменять данное значение


console.log(tasksBlock.innerHTML)

//tasksBlock.innerHTML = ''//очищаем всю верстку
//tasksBlock.innerHTML = '<b>tasksBlock</b>'//добавим свою верстку

//Свойство children - только чтение

const createTaskForm = document.querySelector('.create-task-block')
console.log(createTaskForm.children)//выводятся все дочерние эл-ты формы

createTaskForm.children = null //ничего не изменится

//data - атрибуты - можем получать и изменять
//обратить внимание - атрибуты мы пишем через дефис,
//а получаем мы их без дефисов, после дефиса первая 
//буква становится заглавной 


const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log(firstNavButton.dataset.buttonId)//выводит объект у которого есть ключ buttonId и мы к нему можем обратиться

firstNavButton.dataset.buttonId = '10'//изменяем значение атрибута


//style - можем получать и изменять

console.log(firstNavButton.style)//выводит объект
firstNavButton.style.fontWeight = 'bold'//меняем жироность шрифта
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #fff'//меняем жироность шрифта
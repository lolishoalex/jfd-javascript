//DOM - document object model

//1 Как получать html элементы через js
//Получать эл-ты мы можем по разному: 
//по названию тега, по id, по классу, по атрибуту


// 1 Рассмотрим получение html элемента по id (устаревший метод)

const tasksBlock = document.getElementById('tasks')//в скобки передаем название id
console.log(tasksBlock)

// 2 Рассмотрим получение html элемента по классу (устаревший метод)

const allNavButtons = document.getElementsByClassName('main-navigation__button-item')
console.log(allNavButtons)

// 3 Рассмотрим получение html элемента по тегу (устаревший метод)

const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

// 4 querySelector (современный метод)
// querySelector всегда ищет только первое совпадение
// если querySelector не находит ел-нт то выводится null

const tasksBlock2 = document.querySelector('#tasks')//для id эл-та необходимо указать #
console.log('tasksBlock2', tasksBlock2)

const mainNavigation = document.querySelector('.main-navigation')//для класса необходимо указать .
console.log('mainNavigation', mainNavigation)

const firstButton = document.querySelector('button')//для тегов необходимо указать название тега
console.log('firstButton', firstButton)

const thirdNavButton = document.querySelector('[data-button-id="3"]')//для поиска эл-та по атрибуту необходимо указать []
console.log('thirdNavButton', thirdNavButton)//чтобы получить третью кнопку нужно указать ее номер


// querySelectorAll - выбирает все эл-ты по даному селектору

const allNavButtons2 = document.querySelectorAll('.main-navigation__button-item')//для поиска эл-та по атрибуту необходимо указать []
console.log('allNavButtons2', allNavButtons2)//чтобы получить третью кнопку нужно указать ее номер

allNavButtons2.forEach((button, index) => {
    console.log(index, button)
});



//Вложенный поиск ел-тов - нужно уметь выделять ключевые родительские ел-ты и искать по ним

const createTaskBlock = document.querySelector('.create-task-block')//
const submitButton = createTaskBlock.querySelector('[type="submit"]')//
console.log('submitButton', submitButton)//чтобы получить третью кнопку нужно указать ее номер
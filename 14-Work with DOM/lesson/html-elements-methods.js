//Создание HTML-элементов и добавление их в DOM

//createElement

const newNavButton = document.createElement('a')//указываем тег который хотим создать
newNavButton.className = 'main-navigation__button-item'//указываем класс
newNavButton.href = '#tasks_expired'//указываем href
newNavButton.dataset.buttonId = '4'//указываем data-button-id
newNavButton.textContent = 'Просроченные задачи'//указываем контент кнопки
console.log(newNavButton)

//добавляем эл-нт в DOM - есть несколько методов

//append, prepend - прежде чем добавлять эл-нт,
//нужно определить куда его добавить и получить html эл-нт

//prepend - добавляет эл-нт в начало
//append - добавляет эл-нт в конец

const mainNavigation = document.querySelector('.main-navigation')
//mainNavigation.append(newNavButton)
//mainNavigation.prepend(newNavButton)

//еще один часто используемый метод - insertAdjacentElement(position, element)
//position -  определяет позицию добавляемого элемента относительно элемента, вызвавшего метод
// 'beforebegin': перед самим элементом
// 'afterbegin': внутри элемента, перед его первым потомком
// 'beforeend': внутри элемента, после его последнего потомка
// 'afterend': после самого элемента
//element - эл-нт, добавляемый в DOM-дерево

mainNavigation.insertAdjacentElement('afterbegin', newNavButton)

//как удалять эл-ты из DOM - метод remove

//mainNavigation.remove()//пишем эл-нт который хотим удалить и вызываем метод remove

//метод closest - ищет ближайший родительский эл-нт или эл-нт который который стоит перед точкой

const taskItemText = document.querySelector('.task-item__text')
console.log('taskItemText', taskItemText)

const taskItem = taskItemText.closest('.task-item')
console.log('taskItem', taskItem)

//свойство classList у него есть методы add, remove, toggle
//classList работает с классами html эл-та
//add - добавляет новый класс к уже существующему
//remove - удаляет класс
//toggle - объединяет в себя add и remove, смотрит если класс который 
//был передан уже существует, тогда он его удаляет, если класс который 
//был передан в toggle не существует, тогда он его добавляет

const firstNavigationButton = document.querySelector('.main-navigation__button-item')
firstNavigationButton.classList.add('main-navigation__button-item_selected')
//console.log('taskItem', taskItem)

firstNavigationButton.classList.remove('main-navigation__button-item_selected')

firstNavigationButton.classList.toggle('main-navigation__button-item_selected')
firstNavigationButton.classList.toggle('main-navigation__button-item_selected')
firstNavigationButton.classList.toggle('main-navigation__button-item_selected')

//работа с атрибутами 
//hasAttribute - проверяет существует атрибут или нет
//getAttribute - получает значение атрибута
//removeAttribute - удаляет атрибут
//setAttribute -  добавляет атрибута

const createTaskInput = document.querySelector('.create-task-block__input')
console.log(createTaskInput.hasAttribute('type'))//ответ true так как атрибут type существует у input
console.log(createTaskInput.hasAttribute('type_1'))//ответ false так как атрибут type_1 не существует у input

console.log(createTaskInput.getAttribute('value'))//Посмотреть урок по JavaScript

createTaskInput.removeAttribute('placeholder')

createTaskInput.setAttribute('placeholder', 'Создать новую задачу')























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



























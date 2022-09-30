//Обработчики событий. Событие click 

// const firstNavButton = document.querySelector('.main-navigation__button-item')

// //обрабатываем клик на кнопку с помощью addEventListener
// //у него есть 2 параметра: тип обработчика (например 'click'), колбек (event) => {}

// firstNavButton.addEventListener('click', (event) => {
//     console.log(event.target)
//     //const target = event.target
//     const { target } = event //современная запись
//     target.classList.add('main-navigation__button-item_selected')
// })

//работа со всеми кнопками forEach

const allNavButtons = document.querySelectorAll('.main-navigation__button-item')

allNavButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        allNavButtons.forEach((button) => {
            button.classList.remove('main-navigation__button-item_selected')
        })
        const { target } = event
        target.classList.add('main-navigation__button-item_selected')
    })
})


//submit - это событие обычно добавляется на форму
//submit Поу молчанию перезагружает сраницу и добавляет в url все внесенные данные
//preventDefault - удаляет/отменяет дефолтные действия

const createTaskForm = document.querySelector('.create-task-block')

createTaskForm.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault()
    const { target } = event
    const taskNameInput = target.taskName
    const inputValue = taskNameInput.value
    console.log('inputValue', inputValue)
    if (inputValue) {
        alert(`Вы создали задачу ${inputValue}`)
    } else {
        alert('Введите правельные данные')
    }
})

//keydown и keyup
//keydown - срабатывает когда мы нажимаем на клавишу
//keyup - срабатывает когда мы отпускаем клавишу

document.addEventListener('keydown', (event) => {
    //console.log(event)
    const { key } = event
    //console.log('keydown', key)
    // const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
    // if (taskItemToDelete) {
    //     const deleteConfirmed = confirm('Вы действительно хотите удалить задачу?')
    //     if (deleteConfirmed) {
    //         taskItemToDelete.remove()
    //     }
    // }
})

document.addEventListener('keyup', (event) => {
    //console.log(event)
    const { key } = event
    //console.log('keyup', key)
    const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
    if (taskItemToDelete) {
        taskItemToDelete.remove()
    }
})


//mouseover - сработывает тогда, когда наша мышка находится над каким-то эл-ом

const createTooltip = (text) => {
    const tooltip = document.createElement('span')
    tooltip.textContent = text
    tooltip.className = 'tooltip'

    return tooltip
}

document.addEventListener('mouseover', (event) => {
    const { target } = event
    //console.log('target', target)
    const isOverDeleteButton = target.className.includes('task-item__delete-button')
    if (isOverDeleteButton) {
        //console.log('success')
        const taskItemHtml = target.closest('.task-item')
        const taskId = taskItemHtml?.dataset.taskId
        if (taskId) {
            const toolTipHtml = createTooltip(`Удалить задачу под номером ${taskId}?`)
            target.append(toolTipHtml)
        }
    }

})


//mouseout - сработывает тогда, когда наша мышка уходит с эл-та

document.addEventListener('mouseout', (event) => {
    const { target } = event
    //console.log('target', target)
    const isOutFromDeleteButton = target.className.includes('task-item__delete-button')
    if (isOutFromDeleteButton) {
        const tooltip = document.querySelector('.tooltip')
        if (tooltip) {
            tooltip.remove()
        }
    }

})

//mousemove - сработывает тогда, когда мышка двигается

// document.addEventListener('mousemove', (event) => {
//     console.log('event', event)
// })

//contextmenu - это меню которое появляется поле нажатия 
//на правую кнопку мыши
//contextmenu срабатывает тогда когда мы его открываем

document.addEventListener('contextmenu', (event) => {
    console.log('event', event)
    event.preventDefault()//метод для создания собственного контекстного меню
})

//change срабатывает когда мы убираем фокус с инпута
//input срабатывает когда мы вводим что либо в инпут

const checkTaskNameInputOnValodation = (value) => {
    if (!value || value.includes('@')) {
        return false
    }
    return true
}

const createTaskBlock = document.querySelector('.create-task-block')
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input')

//taskNameInput.addEventListener('change', (event) => {
taskNameInput.addEventListener('input', (event) => {
    const { target } = event
    const { value } = target
    const isValid = checkTaskNameInputOnValodation(value)
    console.log(value)
    const massegeBlockFromDOM = document.querySelector('.error-message-block')

    if (!isValid) {
        const newMassageBlock = document.createElement('span')
        newMassageBlock.className = 'error-message-block' 
        newMassageBlock.textContent = 'Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ собаки "@"!'
        createTaskBlock.append(newMassageBlock)
    } else if (isValid && massegeBlockFromDOM) {
        massegeBlockFromDOM.remove()
    }
})


//Всплытие и погружение. Прекращение всплытия







































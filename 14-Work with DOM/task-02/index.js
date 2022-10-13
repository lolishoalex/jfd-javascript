const tasks = [
    {id: 1, completed: false, text: 'Посмотреть новый урок по JavaScript'},
    {id: 2, completed: false, text: 'Выполнить тест после урока'},
    {id: 3, completed: false, text: 'Выполнить ДЗ после урока'},
]

let arrPush = {}

pushTasksInHtml()

function appendElement (id, text) {//очень долго
  console.log('--', id, text)
  //creating el div
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = id

  //putting div in DOM
  const tasksList = document.querySelector('.tasks-list')
  tasksList.prepend(taskItem)

  //creating el div
  const taskItemMainContainer = document.createElement('div')
  taskItemMainContainer.className = 'task-item__main-container'

  //putting div in DOM
  taskItem.prepend(taskItemMainContainer)

  //creating el div
  const taskItemMainContent = document.createElement('div')
  taskItemMainContent.className = 'task-item__main-content'

  //putting div in DOM
  taskItemMainContainer.prepend(taskItemMainContent)

  //creating el form
  const checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'

  //putting form in DOM
  taskItemMainContent.prepend(checkboxForm)

  //creating el input
  const checkboxFormCheckbox = document.createElement('input')
  checkboxFormCheckbox.className = 'checkbox-form__checkbox'
  checkboxFormCheckbox.type = 'checkbox'
  checkboxFormCheckbox.id = id

  //putting input in DOM
  checkboxForm.prepend(checkboxFormCheckbox)

  //creating el label
  const checkboxFormLabel = document.createElement('label')
  checkboxFormLabel.htmlFor = id

  //putting label in DOM
  checkboxFormCheckbox.insertAdjacentElement('afterend', checkboxFormLabel)

  //creating el span
  const taskItemText = document.createElement('span')
  taskItemText.className = 'task-item__text'
  taskItemText.textContent = text

  //putting span in DOM
  checkboxForm.insertAdjacentElement('afterend', taskItemText)

  //creating el button
  const taskItemDeleteButton = document.createElement('button')
  taskItemDeleteButton.className = 'task-item__delete-button default-button delete-button'
  taskItemDeleteButton.dataset.deleteTaskId = '5'
  taskItemDeleteButton.textContent = 'Удалить'

  //putting button in DOM
  taskItemMainContent.insertAdjacentElement('afterend', taskItemDeleteButton)
}

const createTaskBlock = document.querySelector('.create-task-block')

  createTaskBlock.addEventListener('submit', (event) => {
      console.log(event)
      event.preventDefault()
      const { target } = event
      const taskNameInput = target.taskName
      const inputValue = taskNameInput.value
      console.log('inputValue', inputValue)
      if (inputValue) {
        const tasksId = tasks.length + 1
        arrPush = {id: `${tasksId}`, completed: false, text: `${inputValue}`}
        tasks.push(arrPush)
        appendElement(tasksId, inputValue)
      } else {
          alert('Введите правельные данные')
      }
  })

function pushTasksInHtml() {
  //распарсить массив до нужных эл-ов
  tasks.forEach((array) => {
    appendElement(array.id, array.text)
  })
}
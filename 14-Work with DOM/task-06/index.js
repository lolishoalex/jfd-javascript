// State
// =================
const tasks = [
  { id: 1, completed: false, text: "Посмотреть новый урок по JavaScript" },
  { id: 2, completed: false, text: "Выполнить тест после урока" },
  { id: 3, completed: false, text: "Выполнить ДЗ после урока" },
  { id: 4, completed: false, text: "New task" },
  { id: 5, completed: false, text: "New task again" },
  { id: 6, completed: false, text: "Final task" },
];

// Application
// =================
themeChanging ();

pushTasksInHtml();

//***start of creating modal window***

//creating div
const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay modal-overlay_hidden";

//putting div in DOM
const tasksBlock = document.querySelector("#tasks");
tasksBlock.insertAdjacentElement("beforebegin", modalOverlay);

//creating div
const deleteModal = document.createElement("div");
deleteModal.className = "delete-modal";

//putting div in DOM
modalOverlay.prepend(deleteModal);

//creating h3
const h3DeleteModal = document.createElement("h3");
h3DeleteModal.className = "delete-modal__question";
h3DeleteModal.textContent = "Вы действительно хотите удалить эту задачу?";

//putting h3 in DOM
deleteModal.prepend(h3DeleteModal);

//creating div
const buttonsDeleteModal = document.createElement("div");
buttonsDeleteModal.className = "delete-modal__buttons";

//putting div in DOM
h3DeleteModal.insertAdjacentElement("afterend", buttonsDeleteModal);

//creating button
const cancelButtonDeleteModal = document.createElement("button");
cancelButtonDeleteModal.className =
  "delete-modal__button delete-modal__cancel-button";
cancelButtonDeleteModal.textContent = "Отмена";

//putting button in DOM
buttonsDeleteModal.prepend(cancelButtonDeleteModal);

//creating button
const confirmButtonDeleteModal = document.createElement("button");
confirmButtonDeleteModal.className =
  "delete-modal__button delete-modal__confirm-button";
confirmButtonDeleteModal.textContent = "Удалить";

//putting button in DOM
cancelButtonDeleteModal.insertAdjacentElement(
  "afterend",
  confirmButtonDeleteModal
);

//***finish of creating modal window***

// EventListener for form.
const createTaskBlock = document.querySelector(".create-task-block");

createTaskBlock.addEventListener("submit", (event) => {
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const inputValue = taskNameInput.value.trim();
  console.log("inputValue", inputValue);

  const validateValue = validator(inputValue);
  console.log("--", validateValue);
  if (!validateValue) {
    console.log("---", validateValue, !validateValue);
    let tasksId = tasks[0].id;
    tasks.forEach((item) => {
      if (item.id > tasksId) tasksId = item.id;
    });
    arrPush = { id: tasksId + 1, completed: false, text: `${inputValue}` };
    tasks.push(arrPush);
    pushTasksInHtml();
    //appendElement(tasksId, inputValue)
  } else {
    errorMessageBlock(validateValue);
  }
});

// Functions
// =================

function pushTasksInHtml() {
  const prevTasksList = document.querySelector(".tasks-list");
  prevTasksList.remove();

  const tasksWrapper = document.querySelector(".tasks__wrapper");

  const tasksList = document.createElement("div");
  tasksList.className = "tasks-list";
  tasksWrapper.append(tasksList);

  //распарсить массив до нужных эл-ов
  tasks.forEach((array) => {
    //creating el div
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = array.id;

    //putting div in DOM
    //const tasksList = document.querySelector('.tasks-list')
    tasksList.prepend(taskItem);

    //creating el div
    const taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.className = "task-item__main-container";

    //putting div in DOM
    taskItem.prepend(taskItemMainContainer);

    //creating el div
    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";

    //putting div in DOM
    taskItemMainContainer.prepend(taskItemMainContent);

    //creating el form
    const checkboxForm = document.createElement("form");
    checkboxForm.className = "checkbox-form";

    //putting form in DOM
    taskItemMainContent.prepend(checkboxForm);

    //creating el input
    const checkboxFormCheckbox = document.createElement("input");
    checkboxFormCheckbox.className = "checkbox-form__checkbox";
    checkboxFormCheckbox.type = "checkbox";
    checkboxFormCheckbox.id = array.id;

    //putting input in DOM
    checkboxForm.prepend(checkboxFormCheckbox);

    //creating el label
    const checkboxFormLabel = document.createElement("label");
    checkboxFormLabel.htmlFor = array.id;

    //putting label in DOM
    checkboxFormCheckbox.insertAdjacentElement("afterend", checkboxFormLabel);

    //creating el span
    const taskItemText = document.createElement("span");
    taskItemText.className = "task-item__text";
    taskItemText.textContent = array.text;

    //putting span in DOM
    checkboxForm.insertAdjacentElement("afterend", taskItemText);

    //creating el button
    const taskItemDeleteButton = document.createElement("button");
    taskItemDeleteButton.className =
      "task-item__delete-button default-button delete-button";
    taskItemDeleteButton.dataset.deleteTaskId = array.id;
    taskItemDeleteButton.textContent = "Удалить";

    //putting button in DOM
    taskItemMainContent.insertAdjacentElement("afterend", taskItemDeleteButton);

    //***remove error message block***
    const removeOldMasg = document.querySelector(".error-message-block");
    if (removeOldMasg) removeOldMasg.remove();
  });
  setListenersToDeleteButtons();
}

function setListenersToDeleteButtons() {
  const tasksList1 = document.querySelector(".tasks-list");
  tasksList1.addEventListener(
    "click",
    (event) => {
      const { target } = event;
      console.log(target);
      const delButton = target.closest(".task-item__delete-button");
      console.log("delButton", delButton);
      console.log("target", target);
      if (delButton) {
        const taskItem = target.closest(".task-item");
        const taskItemId = taskItem.dataset.taskId;
        deleteTask(taskItemId);
      }
    },
    { once: true }
  );
}

function validator(value) {
  let result = false;
  if (!value) result = "Название задачи не должно быть пустым";
  if (value) {
    //console.log('+', value)
    tasks.forEach((array) => {
      if (array.text === value) {
        //console.log('++++', array.text === value, array.text, value)
        result = "Задача с таким названием уже существует";
      }
    });
  }
  return result;
}

function errorMessageBlock(value) {
  const errorMessageNothing = document.createElement("span");
  errorMessageNothing.className = "error-message-block";
  errorMessageNothing.textContent = value;
  const removeOldMasg = document.querySelector(".error-message-block");
  if (removeOldMasg) removeOldMasg.remove();
  const taskInForm = document.querySelector(".create-task-block");
  taskInForm.append(errorMessageNothing);
}

function deleteTask(taskId) {
  modalOverlay.classList.remove("modal-overlay_hidden");
  console.log("1--taskId", taskId);

  function handlerCancelButton(event) {
    console.log(event.target);
    const { target } = event;
    modalOverlay.classList.add("modal-overlay_hidden");
    //cancelButtonDeleteModal.removeEventListener('click', handlerCancelButton)
  }

  cancelButtonDeleteModal.addEventListener("click", handlerCancelButton, {
    once: true,
  });

  function handlerConfirmButton() {
    // console.log(event.target)
    // const { target } = event

    //delete obj from arr
    console.log("2--tasks_before", tasks);
    const resultFindIndex = findIndex(taskId);
    console.log("resultFindIndex", resultFindIndex);
    tasks.splice(resultFindIndex, 1);
    console.log("3--tasks_after", tasks);
    pushTasksInHtml();

    // const taskItem = document.querySelector(`[data-task-id="${taskId}"]`)
    // console.log('taskItem', taskItem)

    // console.log('taskId', taskId)
    // taskItem.remove()

    modalOverlay.classList.add("modal-overlay_hidden");
    //confirmButtonDeleteModal.removeEventListener('click', handlerConfirmButton)
  }

  confirmButtonDeleteModal.addEventListener("click", handlerConfirmButton, {
    once: true,
  });
}

function findIndex(taskId) {
  let resultFindIndex = tasks.findIndex((item) => {
    return taskId == item.id;
  });
  return resultFindIndex;
}

  function themeChanging () {

    let themeColor = 0
    document.addEventListener('keydown', (event) => {
      event.preventDefault()
      console.log(event)
      console.log(event.which)
      const { key } = event
      console.log('key', key)
      const bodyColor = document.querySelector('body')
      const allElemTaskItem = document.querySelectorAll('.task-item')
      console.log('allElemTaskItem', allElemTaskItem)
      const allElemButton = document.querySelectorAll('button')
      console.log('allElemButton', allElemButton)
      if (event.which === 9) {
        if (themeColor === 0) {
          console.log('before themeColor', themeColor)
          themeColor = 1
          console.log('after themeColor', themeColor)
          bodyColor.style.background = '#24292E'
          for (const element of allElemTaskItem) {
            element.style.color = '#ffffff'
          }
          for (const element of allElemButton) {
            element.style.border = '1px solid #ffffff'
          }
        } else if (themeColor === 1) {
          console.log('before themeColor', themeColor)
          themeColor = 0
          console.log('after themeColor', themeColor)
          bodyColor.style.background = 'initial'
          for (const element of allElemTaskItem) {
            element.style.color = 'initial'
          }
          for (const element of allElemButton) {
            element.style.border = 'none'
          }
        }
      }
    })
  }
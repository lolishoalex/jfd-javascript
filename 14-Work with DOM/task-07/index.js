// State
// =================

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
]

// Application
// =================

class CustomSelect {
    #id
    #options

    constructor(id, options) {
        this.#id = id
        this.#options = options
    }

    render(container) {

    }
}

function htmlDropDownList() {
    
    const prevTasksList = document.querySelector(".tasks-list");

    const selectDropdown = document.createElement('div')
    selectDropdown.className = 'select-dropdown select-dropdown--123'
    
    tasksList.prepend(taskItem)
    
}

{/* <div class="select-dropdown select-dropdown--123">
       <button class="select-dropdown__button select-dropdown__button--123">
           <span class="select-dropdown select-dropdown--123">Выберите Элемент</span>
       </button>
       <ul class="select-dropdown__list select-dropdown__list--123">
           <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
           <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
           <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
           <li class="select-dropdown__list-item" data-value="4">HTML</li>
           <li class="select-dropdown__list-item" data-value="5">CSS</li>
       </ul>
   </div> */}

const customSelect = new CustomSelect('123', options)
const mainContainer = document.querySelector('#container')
customSelect.render(mainContainer)
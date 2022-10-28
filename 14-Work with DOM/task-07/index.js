//Class

class CustomSelect {
    #id
    #options
    #currentSelectedOption

    constructor(id, options) {
        this.#id = id
        this.#options = options
    }

    get #selectedValue() {
        return this.#currentSelectedOption
    }

    // Functions
    // =================

    render(container) {
        const selectDropdown = document.createElement('div')
        selectDropdown.className = `select-dropdown select-dropdown--${this.#id}`
        container.append(selectDropdown)

        const selectDropdownButton = document.createElement('button')
        selectDropdownButton.className = `select-dropdown__button select-dropdown__button--${this.#id}`
        selectDropdown.append(selectDropdownButton)

        const chooseElement = document.createElement('span')
        chooseElement.className = `select-dropdown select-dropdown--${this.#id}`
        chooseElement.textContent = 'Выберите Элемент'
        selectDropdownButton.append(chooseElement)

        const selectDropdownList = document.createElement('ul')
        selectDropdownList.className = `select-dropdown__list select-dropdown__list--${this.#id}`
        selectDropdown.append(selectDropdownList)

        const selectDropdownListItem1 = document.createElement('li')
        selectDropdownListItem1.className = 'select-dropdown__list-item'
        selectDropdownListItem1.textContent = 'JavaScript'
        selectDropdownListItem1.dataset.value = '1'
        selectDropdownList.append(selectDropdownListItem1)

        const selectDropdownListItem2 = document.createElement('li')
        selectDropdownListItem2.className = 'select-dropdown__list-item'
        selectDropdownListItem2.textContent = 'NodeJS'
        selectDropdownListItem2.dataset.value = '2'
        selectDropdownList.append(selectDropdownListItem2)

        const selectDropdownListItem3 = document.createElement('li')
        selectDropdownListItem3.className = 'select-dropdown__list-item'
        selectDropdownListItem3.textContent = 'ReactJS'
        selectDropdownListItem3.dataset.value = '3'
        selectDropdownList.append(selectDropdownListItem3)

        const selectDropdownListItem4 = document.createElement('li')
        selectDropdownListItem4.className = 'select-dropdown__list-item'
        selectDropdownListItem4.textContent = 'HTML'
        selectDropdownListItem4.dataset.value = '4'
        selectDropdownList.append(selectDropdownListItem4)

        const selectDropdownListItem5 = document.createElement('li')
        selectDropdownListItem5.className = 'select-dropdown__list-item'
        selectDropdownListItem5.textContent = 'CSS'
        selectDropdownListItem5.dataset.value = '5'
        selectDropdownList.append(selectDropdownListItem5)
        this.#openAndCloseList()
        this.#chooseItemFromList()
    }

    #openAndCloseList() {
        const selectDropdownButton = document.querySelector('.select-dropdown__button')
        const selectDropdownList = document.querySelector('.select-dropdown__list')

        selectDropdownButton.addEventListener('click', (event) => {
            console.log(event.target)
            const { target } = event
            selectDropdownList.classList.toggle('active')
        })
    }

    #chooseItemFromList() {
        let result = {}
        const selectDropdownList = document.querySelector('.select-dropdown__list')
        const allItems = document.querySelectorAll('.select-dropdown__list-item')
        selectDropdownList.addEventListener('click', (event) => {
            const { target } = event
            const item = target.closest('.select-dropdown__list-item')
            const itemValue = item.dataset.value
            console.log('itemValue', itemValue)
            const selectDropdownText = document.querySelector('span')
            selectDropdownText.textContent = `${itemValue}`
            if (item) {
                allItems.forEach((button) => {
                    button.classList.remove('selected')
                })
                const { target } = event
                target.classList.add('selected')
            }
            this.#options.forEach(obj => {
                console.log('obj', obj)
                const objValue = obj.value
                console.log('objValue', objValue)
                console.log('itemValue', Number(itemValue))
                if (Number(itemValue) == objValue) this.#currentSelectedOption = obj
            })
            const result = this.#selectedValue
            console.log('result', result)
        })
        return result
    }
}

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

const customSelect = new CustomSelect('123', options)
const mainContainer = document.querySelector('#container')
customSelect.render(mainContainer)
import { Settings as Set } from '../core/constants/settings'

export class DonateForm {
    #container
    #createNewDonate
    #totalAmount
    //#totalAmountDiv

    constructor(totalAmount, createNewDonate) {
        this.#container = document.createElement('form')
        this.#container.className = 'donate-form'
        this.#totalAmount = totalAmount
        this.#createNewDonate = createNewDonate
        //this.#totalAmountDiv = document.createElement('h1')
        //this.#totalAmountDiv.id = 'total-amount'
    }

    updateTotalAmount(newAmount) {
        const newAmountText = `${newAmount}${Set.currency}`
        console.log('newAmountText', newAmountText)

        const totalAmountDiv = document.querySelector('#total-amount')
        if (totalAmountDiv) {
            totalAmountDiv.textContent = newAmountText
        }
        console.log('totalAmountDiv.textContent', totalAmountDiv);
    
        return newAmountText
    }

    #onCreateNewDonateSubmit(event) {
        event.preventDefault()
        const newDonateValue = Number(event.target.amount.value)
        const newDonate = {
            amount: newDonateValue,
            date: new Date(),
            }
        this.#createNewDonate(newDonate)
        event.target.amount.value = ''
        console.log('event.target.amount.value', event.target.amount.value)
    }

    render() {
        const totalAmount = document.createElement('h1')
        totalAmount.id = 'total-amount'
        totalAmount.textContent = this.updateTotalAmount(this.#totalAmount)

        const inputLabel = document.createElement('label')
        inputLabel.className = 'donate-form__input-label'
        inputLabel.textContent = `Введите сумму в ${Set.currency}`

        const donateInput = document.createElement('input')
        donateInput.className = 'donate-form__donate-input'
        donateInput.name = 'amount'
        donateInput.type = 'number'
        donateInput.max = '100'
        donateInput.min = '0'
        donateInput.required = ''

        inputLabel.append(donateInput)

        const submitButton = document.createElement('button')
        submitButton.className = 'donate-form__submit-button'
        submitButton.type = 'submit'
        submitButton.textContent = 'Задонатить'

        this.#container.append(totalAmount, inputLabel, submitButton)

        this.#container.addEventListener('submit', this.#onCreateNewDonateSubmit.bind(this))

        return this.#container
    }
}
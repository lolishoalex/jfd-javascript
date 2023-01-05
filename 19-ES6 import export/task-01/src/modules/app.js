import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'
import * as AllUtils from '../core/utils/index'

export default class App {
    #DonateForm
    #DonateList

    static #mockDonates = [
        { amount: 4, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 3, date: new Date() },
        { amount: 1, date: new Date() }
    ]

    constructor() {
        this.state = {
            //donates: [],
            donates: App.#mockDonates,
            totalAmount: AllUtils.calculateSumOfNumbers(this.createArrNumbers(App.#mockDonates))
        }
        this.textBlock = document.createElement('div')
        this.textBlock.className = 'text-block'
        this.#DonateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.#DonateList = new DonateList(this.state.donates)
    }

    createArrNumbers(arrdata) {
        const numbers = arrdata.map((el, index, array) => {
            console.log('run', el.amount)
            return el.amount
        })
        return numbers
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount += newDonate.amount
        this.#DonateList.updateDonates(this.state.donates)
        this.#DonateForm.updateTotalAmount(this.state.totalAmount)
        console.log('createNewDonate done!!!', this.state.totalAmount)
    }

    run() {
        //console.log('createArrNumbers(mockDonates)', this.createArrNumbers(App.#mockDonates))
        const textBlockHTML = this.textBlock
        textBlockHTML.textContent = 'Hello World'

        const DonateFormHTML = this.#DonateForm.render()

        const DonateListHTML = this.#DonateList.render()

        document.body.append(textBlockHTML, DonateFormHTML, DonateListHTML)
        
        return this.textBlock
    }
}

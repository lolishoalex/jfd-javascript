import { Settings } from '../core/constants/settings'
import * as AllUtils from '../core/utils/index'

export class DonateList {
    #container

    constructor(donates) {
        this.donates = donates
        this.#container = document.createElement('div')
        this.#container.className = 'donates-container'
    }

    updateDonates(updatedDonates) {
        console.log('updatedDonates', updatedDonates);
        const newupdatedDonates = document.querySelector('.donates-container__donates')
        newupdatedDonates.textContent = ''
        updatedDonates.forEach(obj => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.textContent = `${AllUtils.getFormattedTime()} - `
            newupdatedDonates.append(donateItem)
    
            const donateAmount  = document.createElement('b')
            donateAmount.textContent = `${obj.amount} ${Settings.currency}`
            donateItem.append(donateAmount)
        });
    }

    render() {
        const donatesContainerTitle = document.createElement('h2')
        donatesContainerTitle.className = 'donates-container__title'
        donatesContainerTitle.textContent = 'Список донатов'

        const donatesContainerDonates = document.createElement('div')
        donatesContainerDonates.className = 'donates-container__donates'

        this.donates.forEach(elem => {
            console.log('elem.date', elem.date)
            console.log('elem.amount', elem.amount)
            const date = elem.date
            const amount = elem.amount

            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.textContent = `${AllUtils.getFormattedTime()} - `
            donatesContainerDonates.append(donateItem)
    
            const donateAmount  = document.createElement('b')
            donateAmount.textContent = `${amount}${Settings.currency}`
            donateItem.append(donateAmount)
        });

        this.#container.append(donatesContainerTitle, donatesContainerDonates)

        return this.#container
    }
}
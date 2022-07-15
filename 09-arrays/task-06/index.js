let clientsEstimations = []
console.log('clientsEstimations', clientsEstimations)

const askClientToGiveEstimation = () => {
    let giveYourEstimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    giveYourEstimation = Number(giveYourEstimation)
    console.log(typeof giveYourEstimation, giveYourEstimation)
    if (giveYourEstimation >= 1 && giveYourEstimation <= 10) {
        clientsEstimations.unshift(giveYourEstimation)
        console.log('clientsEstimations', clientsEstimations)
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation()
    console.log('i', i)
}

let goodEstimations = 0
let notGoodEstimations = 0

const goodClientsEstimations = clientsEstimations.filter((estimations) => {
    return estimations > 5
})
console.log('goodClientsEstimations', goodClientsEstimations)

clientsEstimations = clientsEstimations.length
console.log('clientsEstimations.length', clientsEstimations)
goodEstimations = goodClientsEstimations.length
notGoodEstimations = clientsEstimations - goodEstimations
console.log('notGoodEstimations', notGoodEstimations)
console.log(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)
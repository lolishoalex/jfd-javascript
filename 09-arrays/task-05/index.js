const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => {
    return price + 0.5
})
console.log('updatedPrices', updatedPrices)


coffees.forEach((name, index) => {
    console.log(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
})
const coffees = ['Latte', 'Cappuccino', 'Americano']

let coffeeName = prompt('Поиск кофе по названию:')
coffeeName = coffeeName.trim().toLowerCase()
console.log('coffeeName', coffeeName)

const coffeesToLowerCase = coffees.map((coffee) => {
    return coffee.toLowerCase()
})
console.log('coffeesToLowerCase', coffeesToLowerCase)

//ищем индэкс кофе по названию
let findIndexCoffees = coffeesToLowerCase.findIndex((index) => {
    return index === coffeeName
})
console.log('findIndexCoffees', findIndexCoffees)


if (findIndexCoffees !== -1) {
    console.log('findIndexCoffees === coffeeName', findIndexCoffees === coffeeName)
    console.log(`Держите ваш любимый кофе ${coffees[findIndexCoffees]}. Он ${findIndexCoffees+1}-й по популярности в нашей кофейне.`)
} else {
    console.log('К сожалению, такого вида кофе нет в наличии.')  
}
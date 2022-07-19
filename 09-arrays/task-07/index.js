/*1*/
const goals = [8, 1, 1, 3, 2, -1, 5]
let theMostResultativeMatchByGoals = [...goals]//копирование массива
//let ascendingOrderOfMatches = [...goals]//копирование массива

theMostResultativeMatchByGoals.sort((a, b) => {
    if (a < b) {
        return 1
    }
    if (a > b) {
        return -1
    }
    return 0
})
console.log('theMostResultativeMatchByGoals', theMostResultativeMatchByGoals)

const numberOfGoals = theMostResultativeMatchByGoals[0]
console.log('numberOfGoals', numberOfGoals)

const number = goals.findIndex((item) => {
    return item === numberOfGoals
})
console.log('number', number)
console.log('goals', goals)

console.log(`Самый результативный матч был под номером ${number + 1}. В нем было забито ${numberOfGoals} гол(ов).`)

/*2  const goals = [8, 1, 1, 3, 2, -1, 5]*/

// шаг 1
let goals1 = goals.filter((goals) => {
    return goals !== -1
})
console.log('goals1', goals1)
// шаг 2
const numberOfGoals1 = Math.min(...goals1)
console.log('numberOfGoals1', numberOfGoals1)

let goalsLength = goals.length
console.log('goalsLength', goalsLength)
let indexOfunresultativeGoals = []
goals.forEach((goals, index) => {
    if (goals === numberOfGoals1) {
        indexOfunresultativeGoals.push(index + 1)
     }
})
let numbers1 = indexOfunresultativeGoals.join(', ')

console.log(`Самые не результативные матчи были под номерами ${numbers1}. В каждом из них было забито по ${numberOfGoals1} мячу(а).`)
//console.log('goals', goals)

/*3 const goals = [8, 1, 1, 3, 2, -1, 5] */

let sumGoals = goals.reduce((total, goals, index, array) => {
    if (goals !== -1) {
    console.log("total = ", total)
    return total + goals
    }  else {
    console.log("-1 / total = ", total)
    return total
    }
    console.log('total', total)
}, 0)
console.log('sumGoals', sumGoals)
console.log(`Общее количество голов за сезон равно ${sumGoals}.`)

/*4 const goals = [8, 1, 1, 3, 2, -1, 5] */

const autoDefeat = goals.find((goals) => {
    return goals === -1
})
console.log('autoDefeat', autoDefeat)

if (autoDefeat === -1) {
    console.log('Были автоматические поражения: да')
} else {
    console.log('Были автоматические поражения: нет')
}

/*5 const goals = [8, 1, 1, 3, 2, -1, 5] */

const averageNumberOfGoals = Math.round(sumGoals/goalsLength)
console.log('averageNumberOfGoals', averageNumberOfGoals)

console.log(`Среднее количество голов за матч равно ${averageNumberOfGoals}.`)

/*6 const goals = [8, 1, 1, 3, 2, -1, 5] */

let sortGoals = goals.filter((goals) => {
    return goals !== -1
}).sort((a, b) => {
    return a - b
}).join(', ')
console.log(`Голы в порядке возрастания: ${sortGoals}.`)

/* другое решение
const filteredAscendingOrderOfMatches = ascendingOrderOfMatches.filter((goal, index, array) => {
    return goal !== -1
})
console.log('filteredAscendingOrderOfMatches', filteredAscendingOrderOfMatches)


filteredAscendingOrderOfMatches.sort((a, b) => {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    return 0
})

let stringAscendingOrderOfMatches = filteredAscendingOrderOfMatches.join(', ')

console.log('stringAscendingOrderOfMatches', stringAscendingOrderOfMatches)
console.log(`Голы в порядке возрастания: ${stringAscendingOrderOfMatches}.`)
*/
console.log('goals', goals)
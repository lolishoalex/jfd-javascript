// Добавление элементов

const salariesOfDevelopers = [400, 500, 600, 2000, 350]
const nesSeniorDeveloperSalary = 5000

// Push - добавление элементов в конец массива, для этого есть специальный метод

salariesOfDevelopers.push(nesSeniorDeveloperSalary, 5001, 5002)
console.log('salariesOfDevelopers', salariesOfDevelopers)

// Unshift - добавление элементов в начала массива, для этого есть специальный метод

salariesOfDevelopers.unshift(100, 101, 102, 103)
console.log('salariesOfDevelopers', salariesOfDevelopers)


// Удаление элементов

// shift - удаление элементов из начала массива, для этого есть специальный метод
// метод shift возвращает значение которое было удално
const firstRemovedElement = salariesOfDevelopers.shift() //не принимает никаких параметров
salariesOfDevelopers.shift()

console.log('firstRemovedElement', firstRemovedElement)
console.log('salariesOfDevelopers', salariesOfDevelopers)

// pop - удаление элементов из конца массива, для этого есть специальный метод
// метод pop возвращает значение которое было удално

const lastRemovedElement = salariesOfDevelopers.pop()
console.log('lastRemovedElement', lastRemovedElement)


// Изменение элементов массива - с помощью индэкса

salariesOfDevelopers[4] = 6000
salariesOfDevelopers[6] = 10000
console.log('salariesOfDevelopers', salariesOfDevelopers)
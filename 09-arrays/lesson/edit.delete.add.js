// Arrays - edit - delete - add
console.log('\n------- Массивы - редактирование, удаление, добавление\
\n================================')

// Добавление значения в конец массива
const newSeniorDeveloperSalary = 5000
salariesOfDevelopers.push(newSeniorDeveloperSalary)
console.log('salariesOfDevelopers.push(element) =', salariesOfDevelopers)

// Добавление значения в начало массива
const newJuniorDeveloperSalary = 450
salariesOfDevelopers.unshift(newJuniorDeveloperSalary)
console.log('salariesOfDevelopers.unshift (element) =', salariesOfDevelopers)

// Удаление элементов из начала массива
// salariesOfDevelopers.shift() возвращает удаленное значение
let delElement = salariesOfDevelopers.shift()
console.log('salariesOfDevelopers.shift() =', delElement)
console.log('salariesOfDevelopers.shift() =', salariesOfDevelopers)

// Удаление элементов из конца массива
// salariesOfDevelopers.pop() возвращает удаленное значение
let delElementEnd = salariesOfDevelopers.pop()
console.log('salariesOfDevelopers.pop() =', delElementEnd)
console.log('salariesOfDevelopers.pop() =', salariesOfDevelopers)

// Изменение элементов массива
salariesOfDevelopers[1] = 5000
console.log('salariesOfDevelopers[1] = 5000 =', salariesOfDevelopers)
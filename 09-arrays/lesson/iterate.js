// Перебор массивов с помощью for, for of и forEach reduce

// 1-й способ с помощью цыкла for
const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

//console.log(developerNames[1])

for (let i = 0; i < developerNames.length; i += 1) {
    //console.log('i', i)
    console.log('item', developerNames[i])
}

// 2-й способ с помощью цыкла for of

for (const name of developerNames) {
    console.log('name', name)
}

// 3-й способ с помощью функции forEach - самый современный и рекомендуемый
// forEach принимаетв в себя коллбэк, в ней три параметра

//developerNames.forEach(() =>{})
//или
//developerNames.forEach(function(){})

developerNames.forEach((name, index, array) => {
    //console.log('name', name)
    //console.log('index', index)
    console.log('array', array)
})

//Работа с методами массивов: 
//map, filter, find, findIndex, some, every


//Метод map - принимает в себя колл-бэк
//Используется для того чтобы применить какое-то действие для КАЖДОГО элемента массива
//метод возвращает новый массив, чтобы увидеть изменения нужно создать новую переменную


const salariesOfDevelopers = [400, 500, 600, 2000, 350]

/*const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
    return salary * 2//умножаем на 2
})
console.log('updatedSalaries', updatedSalaries)*/

const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
    return salary ** 2//возводим в квадрат
})
console.log('updatedSalaries', updatedSalaries)

//Метод filter - принимает в себя колл-бэк
//метод возвращает новый массив, чтобы увидеть изменения нужно создать новую переменную

const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
    return salary > 500 //возвращаем условие, если результат тру, то элемент будет добавляться в конечный массив, если фолс, то будет пропускаться
})
console.log('filteredSalaries', filteredSalaries)

const filteredSalaries1 = salariesOfDevelopers.filter((salary, index, array) => {
    return index % 2 === 0 //проверяем индэкс на четность
})
console.log('filteredSalaries1', filteredSalaries1)

//Метод find - принимает в себя колл-бэк
//метод ищет элемент в массиве по условию, метод возвращает только первое значение которое было найдено в массиве по условию

const findSalaries = salariesOfDevelopers.find((salary) => {
    return salary === 500 //возвращаем условие, если результат тру, то элемент будет добавляться в конечный массив, если фолс, то будет пропускаться
})
console.log('findSalaries', findSalaries)

const findSalaries1 = salariesOfDevelopers.find((salary) => {
    return salary > 400 //выведет только первый найденый элемент удовлетворяющий нашему условию, , если не найден ответ то будет undefinde
})
console.log('findSalaries1', findSalaries1)

//Метод findIndex - принимает в себя колл-бэк
//метод ищет индэкс элемента в массиве по условию, метод возвращает только первое значение которое было найдено в массиве по условию

const findIndexSalaries = salariesOfDevelopers.findIndex((salary) => {
    return salary === 600 //выведет только первый найденый индєкс элемента удовлетворяющий нашему условию, если не найден ответ то будет -1
})
console.log('findIndexSalaries', findIndexSalaries)

//Метод some, every - принимает в себя колл-бэк
//some - возвращает true/false, возвращет true если найден хотя бы один элемент удовлетворяющий условию

const someSalaries = salariesOfDevelopers.some((salary) => {
    return salary > 1000 //true
})
console.log('someSalaries', someSalaries)

const someSalaries1 = salariesOfDevelopers.some((salary) => {
    return salary > 3000 //false
})
console.log('someSalaries1', someSalaries1)

//every - возвращает true/false, возвращет true если все элементы удовлетворяют условию

const everySalaries = salariesOfDevelopers.every((salary) => {
    return salary > 0 //true
})
console.log('everySalaries', everySalaries)

const everySalaries1 = salariesOfDevelopers.every((salary) => {
    return salary > 3000 //false
})
console.log('everySalaries1', everySalaries1)

//const salariesOfDevelopers = [400, 500, 600, 2000, 350]

//Метод массивов reduce - принимает в себя колл-бэк (4 параметра), и начальное значение
//acc - это наш второй параметр который равен 0
const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
    console.log('acc/salary', acc, salary)
    return acc + salary
}, 0) // 0 - начальное значение acc
console.log('sum', sum)

//Метод массивов sort - принимает в себя колл-бэк (2 элемента: a и b)
//Cортирует массив в порядке возрастания или в порядке убивания
//возвращает 3 значения: < 0, > 0, 0

// сортировка по числам - колл-бэк обязателен

salariesOfDevelopers.sort((a, b) => {
    return a - b // сортируем по возрастанию
    //return b - a // сортируем по убиванию
})
console.log('salariesOfDevelopers', salariesOfDevelopers)

// сортировка по срокам - колл-бэк для сортировки по возрастанию НЕ обязателен/по убыванию обязателен

salariesOfDevelopers.sort() //без колл-бэка
//когда в метод sort не передается никакого колл-бэка, то все значения конвертируются в строки, поэтому все значения в массиве сравниваются как строки и сортируются по возрастанию 
console.log('salariesOfDevelopers', salariesOfDevelopers)

const developerNames1 = ['Maxim', 'Igor', 'Nastya', 'Irina']

developerNames1.sort()//сортировка по возрастанию
console.log('developerNames1', developerNames1)


developerNames1.sort((a, b) => {//сортировка по возрастанию
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    return 0
})
console.log('developerNames1', developerNames1)

developerNames1.sort((a, b) => {//сортировка по убыванию
    if (a < b) {
        return 1
    }
    if (a > b) {
        return -1
    }
    return 0
})
console.log('developerNames1', developerNames1)

//!!!Метод sort ИЗМЕНЯЕТ текущий массив!!!
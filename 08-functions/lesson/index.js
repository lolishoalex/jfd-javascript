// Типы функций - всего из 3
// 1 function declaration
// 2 function expression
// 3 стрелочные функции

// 1 function declaration
// объявляется с помощью ключевого слова function
// в функцию мы можем передавать неограниченное количество параместров
// отличительная черта function declaration в том что мы можем вызывать ее до ее определения. Если поменять местами вызов и определение, то все будет работать также хорошо.
// также для параметров функции можно указывать значения по умолчанию


function feedAnimal(animalName, gender, type) { // определение функции
    console.log(`Animal ${animalName} was feed.`)
}

feedAnimal('Lion', 'male', 'dog') // вызов функции



function feedAnimal(animalName = 'Dog') {
    console.log(`Animal ${animalName} was feed.`)
} // определение функции

feedAnimal('Cat') // вызов функции - если тут ничего не будет указано, то подставится слово Dog, если будет то Dog не подставится





// 2 function expression
// есть ключевое отличие, для чтобы объявить function expression требуется создать переменную
// название функции указываем с помощью переменной
// мы не можем вызывать функцию до ее определения
// также можно вызывать параметры по умолчанию

const feedAnimal1 = function(animalName) {
    console.log(`Animal ${animalName} was feed.`)
}

feedAnimal1('elephant')

const feedAnimal2 = function(animalName = 'dog') {
    console.log(`Animal ${animalName} was feed.`)
}

feedAnimal2()

// 3 стрелочные функции
// для чтобы объявить стрелочную функцию требуется создать переменную
// название функции указываем с помощью переменной
// мы не можем вызывать функцию до ее определения
// также можно вызывать параметры по умолчанию
// () => {} 


const feedAnimal3 = (animalName = 'jiraf') => {
    console.log(`Animal ${animalName} was feed.`)
}

feedAnimal3('tiger')
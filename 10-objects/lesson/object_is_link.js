//Объект - ссылочный тип данных
//Есть 8 типов данных
//7 - примитивы (не ссылочные типы данных)
//1 - не примитив - объект (ссылочный тип данных)

const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value
    } else {
        entity = value
    }
}

const developer = {
    name: 'Maxim',
}
let developerName = 'Maxim'

setName(developer, 'Max')
setName(developerName, 'Max')

console.log('developer', developer) //значение изменилось
console.log('developerName', developerName)//значение НЕ изменилось

console.log({} === {})//false - потому что сравниваются ссылки
console.log([] === [])//false


const entity = {}
const entityCopy = entity

console.log(entity === entityCopy)//true - потому что ссылки равны

console.log('hello' === 'hello')//true - потому что нет ссылок
console.log(5 === 5)//true - так работают все примитивы
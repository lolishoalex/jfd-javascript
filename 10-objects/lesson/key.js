//Работа с ключами объекта
//Ключи объекта бывают двух типов - string | symbol

//Ключи объекта string

const user = {
    name: 'Maxim',
    10: '1234',
    undefined: undefined,
    [false]: false,
}

console.log(Object.keys(user))


//Ключи объекта symbol

const user1 = {//если ключ повторяется, то применяется только последний
    name: 'Maxim',
    name: 'Igor',
    name: 'Anton',
}
console.log('user1', user1)

console.log(Object.keys(user1))


const id = Symbol('id')
const id1 = Symbol('id2')
const user2 = {
    [id]: 1,
    name: 'Maxim',
}
console.log('user2', user2)

console.log(Object.keys(user2))

console.log(user2[id])

//конструкция in - проверяет существует ли какой-то ключ в объекте
//также с помощью in можно проверять ключи у которых тип данных symbol

console.log('name' in user2) //true - ключ-конструкция-объект - результатом выводит true/false

console.log(id in user2) //true
console.log(id1 in user2) //false - в объекте его не существует
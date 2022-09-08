//ООП - это объектно ориентированное программмирование.
//ООП - это методология программирования в основе которой лежат объекты.
//То есть создание объектов с помощью некоторых сущностей.
//сущности эти это - function и class


//function - создатем объект с помощью function
//Чтобы создать объект с помощью function нужно использовать ключевое слово new

function Animal(name) {
    this.name = name

    this.getName = function() {
        return this.name
    }
}
const cat = new Animal('cat')//добавляем new перед название ф-ии
console.log('cat', cat)
console.log(cat.name)
console.log(cat.getName())


//class - создатем объект с помощью class. Это современный способ, рекомендованый.
//используем только фигурные скобки и специальную сущность - constructor 
//constructor - выглядит как обычная ф-я
//constructor - вызывается в первый же момент когда есть слово new
//constructor - инициализирует начальные параметры, это его главная цель.
//В классах ф-ции называют методами, значения - это поля

class Animal1 {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

const dog = new Animal1('dog')//добавляем new перед название ф-ии
console.log('dog', dog)
console.log(dog.name)
console.log(dog.getName())
//Полиморфизм - это одно действие и несколько реализаций

class Animal {//главный класс
    constructor(name) {
        this.name = name
    }

    makeSound() {//действие одно и то же у всех

    }
}

class Dog extends Animal {//дочерний класс
    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log('Gav-gav')//реализация разная
    }
}

class Horse extends Animal {//дочерний класс
    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log('Igo-go')//реализация разная
    }
}


























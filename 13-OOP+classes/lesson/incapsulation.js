// Инкапсуляция - это скрытие реализации какой-либо задачи 
//в JavaScript коде с целью защиты части кода от пользователя или программиста

//public
//privet - # знак закрывающий доступ, указывается перед названием метода либо поля,
//также тот параметр к которому закрывается доступ нужно указать вверху класса,
//чтобы его проинициализировать



class Developer {
    #salary

    constructor(name, progLang) {
        this.name = name
        this.progLang = progLang
        this.#salary = 3000//пример privet поля, параметр будет доступен только внутри данного класса
    }

    get devSalary() {
        return this.#salary
    }

    set setSalary(salary) {
        this.#salary = salary
    }

    startCoding() {
        console.log(this.#salary)
        this.#printProgLang()
        console.log(`${this.name} start to write code`)
    }

    #printProgLang() {
        console.log(`We are programming with ${this.progLang}`)
    }
}

//Создадим объкт от класса Developer
const developer = new Developer('Olga', 'JavaScript')
console.log('developer', developer)

//Для вызова любого из параметров класса, необходимо обращение к объекту через точку

console.log(developer.name)//Olga
console.log(developer.progLang)//JavaScript
developer.startCoding()//Olga start to write code

//Поля и методы к которым мы можем обратиться через точку
//называются публичными - public. То есть они доступны везде
//в том числе и в дочернем классе

class JuniorDeveloper extends Developer {
    constructor(name, progLang) {
        super(name, progLang)
    }
}

const juniorDeveloper = new JuniorDeveloper('Kate', 'JavaScript')
//juniorDeveloper.printProgLang()//We are programming with JavaScript - пример 
//доступа объекта дочернего класса к параметрам родительского класса, параметры
//родительского класса являются публичными, если не стоит знак решетки.

//Существуют также поля privet - это те поля доступ к которым запрещен через точку,
//и также доступ запрещен дочерним классам.

//теперь если мы обратимся к #salary - будет ошибка

//console.log(developer.#salary)//Uncaught SyntaxError: Private field
console.log(developer.startCoding())//Ошибки нет

//также можно делать приватными и методы, нужно прописать решетку перед методом
//juniorDeveloper.#printProgLang()//даже если прописть #, доступ не будет получен, будет ошибка

//Как все-таки получать значения приватных полей и изменять их
//Для это есть ключевые слова get(геттеры) и set(сеттеры)

//get(геттер) - используется для получения значения приватного поля
//чтобы использовать геттер нам требуется нписать слово get и создать его имя

console.log(developer.devSalary)//в геттере не нужны круглые скобки для вызова

//set(сеттер) - используется для получения нового значения приватного поля
//чтобы использовать сеттер нам требуется нписать слово set и создать его имя

developer.setSalary = 5000//в cеттере не нужны круглые скобки для вызова
console.log(developer.devSalary)
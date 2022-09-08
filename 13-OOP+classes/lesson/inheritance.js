// 1. Наследование - это создание дочерних классов на основе базовых 

//Создаем базовый класс(шаблон) Bus, от которого будем создавать дочерние классы

class Bus {
    constructor (type, numberOfPassengers) {
        this.type = type
        this.numberOfPassengers = numberOfPassengers
    }
    startDrive() {
        console.log('Let`s go!');
    }
    
}

const bus = new Bus('Bus', 35)
console.log(bus);
bus.startDrive()
//пока все хорошо, но есть проблема, что если у нас есть еще другие типы автобусов...


//Создаем автобусы используя наш базовый класс Bus 
//extends - дочерний класс BusForExcurtions создаем c помощью extends
//super() - чтобы вызвать консруктор родительского класса и иницилизировать параметры


class BusForExcurtions extends Bus {
    constructor(type, numberOfPassengers) {
        super(type, numberOfPassengers)
        this.secondFloreSeats = 0
    }
    startDrive() {
        console.log('Let`s go for excurtion!');
    }

    setSecondFloreSeats(secondFloreSeats) {
        this.secondFloreSeats = secondFloreSeats
    }

    stop() {
        console.log('Let`s make a stop for 15 minutes!');
    }
}
const busForExcurtions = new BusForExcurtions('ExcurtionBus', 50)

//У нас в классе BusForExcurtions нет никаких методов, но мы можем запустить методы от родительского класса
busForExcurtions.startDrive()
//Сначала дочений класс проверяет наличие метода в своих параметрах, если его нет, то он идет в родительский класс
busForExcurtions.setSecondFloreSeats(25)
busForExcurtions.stop()
console.log('busForExcurtions', busForExcurtions)

//Если кое-каких параметров просто не может существовать в базовом классе Bus,
//как например кол-во мест на втором этаже у экскурсионного автобуса, 
//или остановка на 15 минут, то мы можем сделать эти параметры в дочернем классе,
//вот где нам полезно наследование.

//instanceof - проверяет принадлежит ли какой-то объект какому-то классу, выводит true/false

console.log('busForExcurtions', busForExcurtions instanceof BusForExcurtions)//true - так как на объкт busForExcurtions принадлежит классу BusForExcurtions
console.log('busForExcurtions', busForExcurtions instanceof Bus)//true - так как на объкт busForExcurtions принадлежит классу Bus, так как это родительский класс

class Сar {}//создаем для примера

console.log('busForExcurtions', busForExcurtions instanceof Сar)//false - так как на объкт busForExcurtions не был создан при помощи класса Сar
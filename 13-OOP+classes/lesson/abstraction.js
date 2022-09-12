// Абстракция - это использование только тех характеристик объекта, которые 
//с наибольшей точностью представляют его в какой-то определенной системе

class Futboller {//этот класс является абстрактныйм, так как он описывает общие параметры
    constructor(name, club) {
        this.name = name
        this.club = club
    }

    shoot(){}
    celebrateGoal(){}
    pass(){}
}

class Forvard extends Futboller {//конкретизация всех параметров делается в дочернем классе, когда мы знаем с какой сущностью мы работаем
    constructor(name, club) {
        super(name, club)
    }

    shoot(){
        console.log('Such a strong kik!')
    }
    celebrateGoal(){
        console.log('Wow, I made a goal!')
    }
    pass(){
        console.log('Middle pass')
    }
}


























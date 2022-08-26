// THIS - это ключевое слово, которое обозначает ссылку на обЪект либо контекст выполнения

console.log(this)//по умолчанию всегда прикрепляется к глобальному обЪекту Window

function getName () {
    console.log(this)
}
getName ()//также прикрепится к Window, так как контекст выполнеиея глобальный обЪект

const user = {
    name: 'Max',
    getName () {
        //console.log(this)//выводит объект user, потомучто наша ф-я выполняется в контексте объекта user 
        console.log(this.name)//Max
    }
}
user.getName()

const car = {
    name: 'Audi',
    drive () {
        console.log('drive', this)//Max
    }
}
car.drive()

//ПРАВИЛО которое почти всегда работает: 
//this это тот объект который стоит перед точкой 



















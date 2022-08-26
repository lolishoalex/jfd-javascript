//Как может потеряться контеес

//1 - контекст теряется когда перед вызовом функции
//(перед точкой) не указан никакой объект
const developer = {
    fullName: 'Max-fullName',
    programmingLanguage: 'JavaScript',
    getFullName (age, expirience) {
        console.log('this', this)
        console.log(this.fullName)
        console.log('age', age)
        console.log('expirience', expirience)
    },
    /* getProgrammingLanguage: () => {
        console.log(this)
        console.log(this.programmingLanguage)
    } */
    getProgrammingLanguage: function() {
        console.log(this)
        console.log(this.programmingLanguage)
    }
}
const getFullName = developer.getFullName
//getFullName ()
/*undefined - был потерян контекст так как 
перед вызовом функции(перед точкой) не указан никакой 
объект, значит она будет ссылаться на глобальный объект */

//developer.getFullName ()//Max - контекст не потерян

//2 - стрелочная ф-я. У стрелочной ф-ции нет своего this
//developer.getProgrammingLanguage ()//undefined для стрелочной ф-и

//Если потерялся контекст, как это исправить...bind, call, apply
//getFullName ()

//bind - присваивает контекст и создает новую ф-ю с новым контекстом, но не вызывает ф-ю
//bind - принимает в себя от 1 до бесконечности параметров, 1-й параметр это контекст
//bind всегда ссылается на тот объект который был ему указан
//bind принимает в себя также и параметры функции
const user = {
    name: 'Max',
    surname: 'Smith',
}

//const bindGetFullName = getFullName.bind(developer)
const bindGetFullName = getFullName.bind(user, 20, 3)//user.getFullName(20, 3)
//bindGetFullName()//выводится объект user

//call - сразу же вызывает ф-ю с новым контекстом, у него такие же параметры как и у bind

getFullName.call(developer, 30, 5)

//apply - работает как call, но все параметры в ф-ю передаются в виде массива, 
//то есть в apply есть 2 параметра: контекст и массив

getFullName.apply(developer, [25, 3.5])

























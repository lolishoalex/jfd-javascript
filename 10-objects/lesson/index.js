//Создание объектов. Получение значений объектов по ключу. 
//Удаление, Добавление и Изменений свойств объектов

//Создание объектов

const developer = {
    //key: value, значения объекта и синтаксис
    name: 'Maxim',
    job: 'Front-End Developer',
    expirience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJS',
    }
}
console.log('developer', developer)

//Получение значений объектов по ключу - есть 2 способа

// 1 способ - объект.ключ значение которого хотим получить
//(рекомендуемый)

console.log('name', developer.name)//Maxim
console.log('jobAllInfo', developer.jobAllInfo)

// 2 способ - объект[объявляем строку и вносим ключ]
// используется в определенных случаях

console.log('name', developer['name'])//Maxim

//пример

const key = 'name'

console.log('name', developer[key])//Maxim

//Цепочки обращения к объектам

//1 способ
console.log('type', developer.jobAllInfo.type)//Front-End

// 2 способ
console.log('framework', developer['jobAllInfo']['framework'])//ReactJS
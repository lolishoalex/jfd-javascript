//Опциональная цепочка - ?.

const developer = {
    //key: value, значения объекта и синтаксис
    name: 'Maxim',
    job: 'Front-End Developer',
    expirience: 24,
    //jobAllInfo: {
        //type: 'Front-End',
        //framework: {
            //name: 'ReactJS',
        //}
    //}
}

//тестируем опциональную цепочку

//console.log(developer.jobAllInfo)//Cannot read properties of undefined (reading 'framework') - частая ошибка
//console.log(developer.jobAllInfo.framework)//если такого ключа не существует, то будет undefined


// 1 способ - как решать ошибки

//if (developer.jobAllInfo.framework) {

if (developer && developer.jobAllInfo && developer.jobAllInfo.framework && developer.jobAllInfo.framework.name) { // получается очень длинная строка кода, для ее сокращения нам и нужна опциональная цепочка
    console.log('Разработчик уже знает фреймворк')
} else {
    console.log('Разработчик еще Не знает фреймворк')
}

// 2 способ - как решать ошибки (рекомендуемый)

if (developer?.jobAllInfo?.framework?.name) {
    console.log('Разработчик уже знает фреймворк')
} else {
    console.log('Разработчик еще Не знает фреймворк')
}
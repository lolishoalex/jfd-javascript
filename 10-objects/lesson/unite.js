//Объединение нескольких объектов в один

const developerInfo = {
    age: 25,
    experience: 3,
    name: 'Maxim',
}

const developerExtraInfo = {
    height: 180,
    isHunior: false,
    name: 'Igor',

}

//1 способ современный - объединеняем с помощью спред оператора ...
//если попадутся одинаковые ключи, то применится тот который будет упоследнего объекта

const developer = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Nastya',
}
console.log('developer', developer)

//2 способ устаревший
//Object.assign - принимает 2 параметра: 
//1й параметр - целевой объект (это то куда мы будем помещать все ключи)
//2й параметр - источник (то откуда мы будем брать ключи)

const developer1 = Object.assign(developerInfo, developerExtraInfo)
console.log('developer1', developer1)
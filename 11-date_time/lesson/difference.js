//Подсчет разницы между двумя датами - есть спец. метод getTime 
//Метод getTime выводит кол-во мл.секунд начиная с Января 1970 г.

const date1 = new Date(2005, 4, 20)
const date2 = new Date(2006, 4, 10)

console.log('date1', date1.getTime())
console.log('date2', date2.getTime())

const difference = date2.getTime() - date1.getTime()
console.log('difference', difference / 1000 / 60)//приводим мл.секунды в секунды, затем в минуты

//С помощью обЪекта new Date() можно считать скорость выполнения какой-либо фун-ции или алгоритма
//new Date().getTime() то же самое что и Date.now()

const startTime = Date.now()

for (let i = 0; i < 1000000; i += 1) {
    //do something
}

const endTime = Date.now()

console.log('startTime', startTime)
console.log('endTime', endTime)

const theDifference = endTime - startTime
console.log('theDifference', theDifference)

const date3 = Date(2009, 4, 20)//будет просто строка
console.log('date3', typeof date3, date3)

const date4 = new Date(2009, 4, 20)//будет обЪект
console.log('date4', typeof date4, date4)

//Время в UTC - new Date(Date.UTC(...)) с теми же аргументами
//Значение свойства Date.length равно 7. Это количество аргументов, обрабатываемых конструктором.
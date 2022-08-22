//Для создания дат существует спец. обЪект - Date
//С помощью обЪекта Date можно создавать любую дату
//обЪект Date принимает в себя - new Date(year, month, date, hours, minutes, seconds, ms)
//month in JS 0(january) - 11(december)
//С помощью обЪекта Date можно получать данные о дате и их изменять

const date = new Date()//конструкция
console.log('date', date)

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000)
console.log('newDate', newDate)


//Что бы получить данные о годе и не только, у обЪекта Date есть спец. методы
console.log('year', newDate.getFullYear())
console.log('month', newDate.getMonth())
console.log('date', newDate.getDate())

//Как получить день недели
//0(воскресенье) - 6(суббота)

console.log('day', newDate.getDay())
if (newDate.getDay() === 4) {
    console.log('Сегодня четверг')
}


//Если нужно изменить какие-то данные в дате есть спец. методы

newDate.setFullYear(2001)
newDate.setMonth(2)
newDate.setDate(20)
newDate.setHours(6)
newDate.setMinutes(08)
newDate.setSeconds(13)
newDate.setMilliseconds(2000)
console.log('newDate', newDate)
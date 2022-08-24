const myDate = new Date(2022, 7, 24, 17, 4)
const myDays = Number(3)

const addDays = (date, days = 1) => {
   const oneDayMlSec = 24*60*60*1000
   console.log('days', days)
   const newDate = new Date(date.getTime() + (oneDayMlSec*days))
   return newDate
}
const result = addDays(myDate, myDays)
console.log('result', result)
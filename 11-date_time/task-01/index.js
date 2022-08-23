const myDate = new Date(2005, 10, 15)

const getDateFormat = (date, separator = '.') => {

   let myGetDate = String(date.getDate())
   let myGetMonth = String(date.getMonth() + 1)
   let myGetYear = date.getFullYear()

   if (myGetDate.length === 1) {
      myGetDate = '0' + myGetDate
   }

   if (myGetMonth.length === 1) {
      myGetMonth = '0' + myGetMonth
   }

   return myGetDate + separator + myGetMonth + separator + myGetYear
}
const result = getDateFormat(myDate)
console.log('result', result)
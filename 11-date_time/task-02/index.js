const birthday = new Date(2022, 9, 18)

const getDaysBeforeBirthday = (d) => {
   return convertMsToDays(d)
}
const result = getDaysBeforeBirthday(birthday)
console.log('result', result)

function convertMsToDays (nextBirthdayDate) {
   const today = Date.now()
   return Math.round((nextBirthdayDate.getTime() - today)/1000/60/60/24)
}
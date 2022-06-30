const getDivisors = (number = 1) => {
if (number < 0 || !Number.isInteger(number)) {
   alert('number должен быть целым числом и больше нуля!')
} else {
   let countNumberOfDividers = 0
   for (let i = 1; i <= number; i++) {
      let numberOfDividers = number/i
      //console.log('number/i =', numberOfDividers)
      if (Number.isInteger(numberOfDividers)) {
         //console.log('numberOfDividers =', Number.isInteger(numberOfDividers))
         countNumberOfDividers += 1
         //console.log('countNumberOfDividers =', countNumberOfDividers)
      }

   }
   return countNumberOfDividers
}
   
}
console.log(getDivisors(12))
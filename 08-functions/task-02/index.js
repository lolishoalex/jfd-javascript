let sum = 0

const getSumOfNumbers = (number, type = 'odd') => {
   if(type === 'odd') {
      for (let i = 0; i <= number; i++) {
         if (i % 2) {
            sum = sum + i
         }
      }
      return sum
   } else if (type === 'even') {
      for (let i = 0; i <= number; i++) {
         const testI = i % 2
         if (!testI) {
            sum = sum + i
         }
      }
      return sum
   } else if (type === '') {
      for (let i = 0; i <= number; i++) {
         sum = sum + i
      }
      return sum
   }
   
}

console.log(getSumOfNumbers(10, 'even'))
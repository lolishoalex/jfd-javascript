const allTicketsNumbers = winnerTicket(1016, 1937)
console.log('allTicketsNumbers', allTicketsNumbers)

function winnerTicket(minNum, maxNum) {

   const divisionOn3 = []
   const divisionOn7 = []
   const divisionOn5 = []
   const divisionOn2 = []

   for (let i = minNum; i <= maxNum; i += 1) {
      console.log('i =', i);
      if (i % 3 == 0) {
         divisionOn3.push(i)
         console.log('divisionOn3', divisionOn3)
      }
   }

   divisionOn3.forEach(element => {
      console.log('element =', element);
      if (element % 7 == 0) {
         divisionOn7.push(element)
         console.log('divisionOn7', divisionOn7)
      }
   })

   divisionOn7.forEach(element => {
      console.log('element =', element);
      if (element % 5) {
         divisionOn5.push(element)
         console.log('divisionOn5', divisionOn5)
      }
   })

   divisionOn5.forEach(element => {
      console.log('element =', element);
      if (element % 2) {
         divisionOn2.push(element)
         console.log('divisionOn2', divisionOn2)
      }
   })

   divisionOn2.sort((a, b) => {
         return b - a
   })
   console.log('divisionOn2', divisionOn2)

   return divisionOn2[0]
}
//1911


// второй вариант
console.log('\n----- Task 2 ------')

// [1016; 1937]

rangeOfValues = []
for(let i =1016; i<1938; i++) {
  rangeOfValues.push(i)
}

const result = rangeOfValues.filter((value) => {
   if (value%3 == 0 && value%7 == 0 && value%5 != 0 && value%2 != 0) {
     return value
   }
})
console.log('result.length =', result.length)

const maxOfResult = result.sort((a, b) => {
  return b - a
})

console.log('maxOfResult =', maxOfResult[0])

console.log('Отобранные значения в массиве:', ...result)
console.log('Максимальное значение в массиве:', Math.max(...result))
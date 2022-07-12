const getSumOfSequence = (number) => {
   let numberArray = []
      for (let i = 0; i < number; i += 1) {
         //console.log('i', i)
         numberArray[i] = i + 1
      }
   let lastCellofNumberArray = numberArray.length - 1
   let sumNumberArray = numberArray[0] + numberArray[lastCellofNumberArray]
   return sumNumberArray
   //console.log(sumNumberArray)
   //console.log('numberArray -', numberArray)
   //console.log('lastCellofNumberArray -', lastCellofNumberArray)
   //console.log('sumNumberArray -', sumNumberArray)
   //console.log(numberArray[lastCellofNumberArray])
   
}
getSumOfSequence (33)
console.log(getSumOfSequence (33))

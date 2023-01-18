console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('бук', 'тап')) // false

function isEqualSymbols(str1, str2) {
   sortStr1 = str1.split('').sort().join('')
   console.log(sortStr1)
   sortStr2 = str2.split('').sort().join('')
   console.log(sortStr2)
   
   if (sortStr1 == sortStr2) {
     return true
   } else {
     return false
   }
 }
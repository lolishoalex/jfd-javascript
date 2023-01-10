const mathTest = createMathTest(-100, +100)
console.log('mathTest', mathTest)

let userAnswer = prompt(`Решите пример: ${mathTest.expression}`)

if (userAnswer == mathTest.result) {
   alert(`Ваш ответ: ${userAnswer} верный!`)
} else {
   alert(`Ваш ответ: ${userAnswer} НЕ верный! Правильный ответ: ${mathTest.result}`)
}

function createMathTest(minNum = 0, maxNum = 10) {

   const param = {
      expression: '',
      result: 0
   }
   console.log('param', param)

   const signs = ['+', '-', '/', '*']

   console.log('minNum', minNum)
   console.log('maxNum', maxNum)

   let randFirst = Math.round(Math.random() * (maxNum - minNum + 1) + minNum)
   console.log('randFirst', randFirst)

   let randSecond = Math.round(Math.random() * (maxNum - minNum + 1) + minNum)
   console.log('randSecond', randSecond)

   if (randFirst == -0) {
      randFirst = Math.abs(null)
      console.log('randFirst', randFirst)
   } else if (randSecond == -0) {
      randSecond = Math.abs(null)
      console.log('randSecond', randSecond)
   }

   if (randFirst >= minNum && randSecond <= maxNum) {
      console.log('CORRECT - IN DIAPASONE')

      const randArrSing = Math.floor(Math.random()*signs.length)
      const sign = signs[randArrSing]
      console.log(sign)

      param.expression = `${randFirst} ${sign} ${randSecond}`
      console.log('param.expression', param.expression)

      if (sign == '+') {
         const expressionRes = Math.round(randFirst + randSecond)
         param.result = expressionRes
         console.log('expressionRes', expressionRes)
      } else if (sign == '-') {
         const expressionRes = Math.round(randFirst - randSecond)
         param.result = expressionRes
         console.log('expressionRes', expressionRes)
      } else if (sign == '/') {
         const expressionRes = (randFirst / randSecond).toFixed(2)
         param.result = expressionRes
         console.log('expressionRes', expressionRes)
      } else if (sign == '*') {
         const expressionRes = Math.round(randFirst * randSecond)
         param.result = expressionRes
         console.log('expressionRes', expressionRes)
      }
   
      return param

   } else {
      console.log('ERROR - OUT OF DIAPASONE')
   }
}
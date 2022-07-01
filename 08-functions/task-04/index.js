const checkQuestionAnswer = (question, correctAnswer) => {
   let userAnswer = prompt(question)
   //console.log('correctAnswer', correctAnswer)
   userAnswer = userAnswer.trim()
   //console.log('userAnswer.trim()', userAnswer)
   correctAnswer = correctAnswer.toLowerCase()
   //console.log('correctAnswer.toLowerCase()', correctAnswer)
   userAnswer = userAnswer.toLowerCase()
   //console.log('userAnswer.toLowerCase()', userAnswer)
   if (correctAnswer === userAnswer) {
      alert('Ответ верный')
   } else {
      alert('Ответ неверный')
   }
   }

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
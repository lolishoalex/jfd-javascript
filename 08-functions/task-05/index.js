const text = 'Привет! Как дела! Давно мы с тобой не виделись.'


const showSuccessMessage = (message) => {
   console.log(message)
   }

const showErrorMessage = (message) => {
   console.error(message)
   }

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
   let findError = false;
   for (let i = 0; i <= text.length; i++) {
   //console.log('i =', i)
      if (text[i] === 'а') {
         errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
         findError = true;
      }
   }
   if (!findError) {
      successCallback('В данном тексте нет запрещенных символов')
   }

   }

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
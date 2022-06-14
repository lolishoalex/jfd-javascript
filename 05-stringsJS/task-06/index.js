let userText = prompt('Введите текст', 'Вам необходимо реализовать программу');
userText = userText.trim();
//console.log(userText);


let wordFromText = prompt('Введите слово из текста', 'программу');
wordFromText = wordFromText.trim();
//console.log(wordFromText);


let indexOfWord = userText.indexOf(wordFromText);
userText = userText.slice(0, indexOfWord);
//console.log(indexOfWord);

let string = userText;
alert(`Результат: ${string}`);
//console.log(string);
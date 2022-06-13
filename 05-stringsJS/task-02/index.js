let myInfoText = 'Всем привет! Меня зовут, Olga. Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript у Vladilena. Я хочу стать веб-разработчиком, потому что это мое развитие. До этого я изучал(а) JavaScript 12 месяцев. Я уверен(а), что пройду данный курс до конца!';

myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase());
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length-1]);
const answer1 = Number(4);
const answer2 = Number(4);
const answer3 = Number(1);
const answer4 = Number(12);
const answer5 = Number(6);

let correctAnswers = Number();
let incorrectAnswers = Number();

let userAnswer1 = prompt('Сколько будет 2 + 2?');
userAnswer1 = Number(userAnswer1);
if (userAnswer1 === answer1) {
    alert('Ответ Верный');
    correctAnswers++;
}   else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let userAnswer2 = prompt('Сколько будет 2 * 2?');
userAnswer2 = Number(userAnswer2);
if (answer2 === userAnswer2) {
    alert('Ответ Верный');
    correctAnswers++;
}   else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let userAnswer3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
userAnswer3 = Number(userAnswer3);
if (answer3 === userAnswer3) {
    alert('Ответ Верный');
    correctAnswers++;
}   else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let userAnswer4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
userAnswer4 = Number(userAnswer4);
if (answer4 === userAnswer4) {
    alert('Ответ Верный');
    correctAnswers++;
}   else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let userAnswer5 = prompt('Сколько будет 2 + 2 * 2?');
userAnswer5 = Number(userAnswer5);
if (answer5 === userAnswer5) {
    alert('Ответ Верный');
    correctAnswers++;
}   else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

correctAnswers = Number(correctAnswers);
incorrectAnswers = Number(incorrectAnswers);

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);
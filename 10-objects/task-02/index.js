/*
Вам необходимо создать функцию giveJobToStudent, которая принимает в себя 2 параметра:

student. Объект, содержащий информацию о студенте.
jobName. Название новой работы студента.

Функция giveJobToStudent выводит в модальное окно сообщение “Поздравляем! У студента fullName 
появилась новая работа! Теперь он jobName”, где fullName - это имя студента, а jobName - название 
новой работы студента.

Функция giveJobToStudent должна возвращать новый объект студента, в котором будут все ключи из 
объекта student и также появится новый ключ job со значением параметра jobName.

Для теста функции giveJobToStudent используйте следующий код:
const student = {
   fullName: 'Максим',
   experienceInMonths: 12,
   stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
*/

const student = {
   fullName: 'Максим',
   experienceInMonths: 12,
   stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
   const newStudent = {
      ...student,
      job: jobName}
   const fullName = newStudent.fullName
   //console.log(newStudent)//debug
   console.log(`Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`)
   return newStudent 
}
const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
//console.log(updatedStudent)//debug
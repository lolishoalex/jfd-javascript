//Удаление, Добавление и Изменение свойств объектов

const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExpirienceInReact: false,
}

//Добавление свойств объектов

student.expirience = 6

console.log('student', student)

//Удаление свойств объектов

delete student.hasExpirienceInReact

console.log('student', student)

//Изменение свойств объектов

student.expirience = 12
student.id = 2

console.log('student', student)
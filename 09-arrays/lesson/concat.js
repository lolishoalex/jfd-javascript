// Метод concat - Объединение нескольких массивов в один
//принимает в себя массивы, их количество не ограничено
//возвращает новый массив

const currentDevelopers = ['Максим', 'Олег']
const newDevelopers = ['Антон', 'Глеб']

//1 способ
const allDevelopers = currentDevelopers.concat(newDevelopers, currentDevelopers)
console.log('allDevelopers', allDevelopers)

//2 способ - реализуется с помощью спред оператора, пишется как три точки ...

const allDevelopers1 = [//массивы внутри массива
    ...currentDevelopers,
    ...newDevelopers,
]
console.log('allDevelopers1', allDevelopers1)
/*Задание 4

Представьте, что в полицейском участке проводится расследование. Было совершено несколько преступлений. 
У полицейских есть другие более приоритетные задания, поэтому они попросили вас написать программу, 
которая будет вычислять преступника по уже известным данным.
Ваша задача состоит в том, чтобы создать функцию getKiller. getKiller принимает в себя 2 параметра:

suspectInfo. Это объект, в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, 
которых видели подозреваемые в день убийства.
deadPeople. Это массив с именами людей, которых убил преступник.

Преступником является тот, кто видел всех убитых людей в день убийства. Функция getKiller должна возвращать 
имя преступника.

Примеры результатов функции getKiller:

getKiller(
   {
       'James': ['Jacob', 'Bill', 'Lucas'],
       'Johnny': ['David', 'Kyle', 'Lucas'],
       'Peter': ['Lucy', 'Kyle'],
   }, ['Lucas', 'Bill']
); // Убийца James
 
getKiller(
   {
       'Brad': [],
       'Megan': ['Ben', 'Kevin'],
       'Finn': [],
   },
   ['Ben']
); // Убийца Megan*/

const suspectInfo1 = {
    'James': ['Jacob', 'Lucas', 'Bill'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
}

const deadPeople1 = ['Lucas', 'Bill']

const suspectInfo2 = {
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': [],
}

const deadPeople2 = ['Ben']

const getKiller = (suspectInfo, deadPeople) => {
    const valuesSuspectInfo = Object.keys(suspectInfo)
    let result
    //мы итерируем ключи объекта suspectInfo
    valuesSuspectInfo.forEach(key => {
        
        //мы начинаем итерировать эталонный массив deadPeople
        let killer = deadPeople.every(item => {
            console.log('checked ', item, 'in', suspectInfo[key])
            return suspectInfo[key].includes(item)
        })
        console.log(key, 'key = ', killer)
        if (killer) {
            console.log('debug', key)
            result = key
        }
    })
    return result
}
console.log(getKiller (suspectInfo1, deadPeople1))
console.log(getKiller (suspectInfo2, deadPeople2))
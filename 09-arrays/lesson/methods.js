// Методы массивов: splice, slice, indexOf, includes, join, reverse

//метод splice
//удаляет элементы из массива и вставляет другие элементы
//принимает в себя три параметра - индэкс с которого мы начинаем удаление, вторым параметром принемает количество удаляемых элементов, третий - элементы на которые заменяем
//возвращает удаленные элементы
//изменяет текущий массив

const cars = ['BMW', 'Mersedes', 'Lada']

const remuvedElements = cars.splice(0, 2, 'Audi', 'Bugatti')
console.log('cars', cars)
console.log('remuvedElements', remuvedElements)

//метод slice
//принимает 2 параметра - индэкс с которого мы начинаем удаление, второй - индэкс которым мы закончим обрезку массива
//slice не изменяет текущий массив, возвращает новый массив
//невозможно передать аргументы, которые заменят обрезанные символы

const agesOfDevelopers = [25, 18, 45, 30] //25, 18

console.log('agesOfDevelopers', agesOfDevelopers.slice(0, 2))
console.log('agesOfDevelopers', agesOfDevelopers)

const slisedAgesOfDevelopers = agesOfDevelopers.slice(0, 2)
console.log('slisedAgesOfDevelopers', slisedAgesOfDevelopers)

//метод indexOf
//ищет элемент и возвращает его индэкс

const favoriteFood = ['Мороженное', 'Торт', 'Кофе']

const indexOfFavoriteFood = favoriteFood.indexOf('Торт')
console.log('indexOfFavoriteFood', indexOfFavoriteFood) //1, если элемент не найден, то -1

//метод includes
//проверяет существование элемента в массиве - возвращает true/fals

const technologies = ['JavaScript', 'HTML', 'CSS']
console.log('technologies', technologies)


const isTechnologyExist = technologies.includes('HTML')
console.log('isTechnologyExist', isTechnologyExist)

//метод split(вообще это метод строк), join
//split - преобразовывет строку в массив, принимает в себя разделитель, строчка которая будет указывать по какому символу мы хотим разделить массив
//join - преобразовывет массив в строку, принимает в себя разделитель, строчка которая будет указывать по какому символу мы хотим обЪединить массив

const listOfOrders = 'Майка, шорты, кроссовки, рюкзак'
const listOfOrdersArray = listOfOrders.split(', ')// преобразовываем строку в массив, и разделяем его
console.log('listOfOrdersArray', listOfOrdersArray)

const ordersString = listOfOrdersArray.join('; ')
console.log('ordersString', ordersString)

//метод reverse - переворачивает массив, не принимает никаких параметров
//изменяет текущий массив

technologies.reverse()
console.log('technologies', technologies)
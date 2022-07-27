//Перебор (итерация) объектов. Создание массивов из объектов (keys, values, entries)

const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}

console.log('goodInfo', goodInfo)


//Перебор (итерация) объектов

//for in - устаревший способ

for (const key in goodInfo) { //проходим по всем ключам
    console.log('key', key)
    const value = goodInfo[key] //получаем значения ключей
    console.log('value', value)
}

//Object keys - создает массив из ключей

const keys = Object.keys(goodInfo)
console.log('keys', keys)

//Object values - создает массив из значений

const values = Object.values(goodInfo)
console.log('values', values)

//Object entries - создает массив в массиве и из ключей и из значений

const entries = Object.entries(goodInfo)
console.log('entries', entries)
console.log('entries[0]', entries[0])
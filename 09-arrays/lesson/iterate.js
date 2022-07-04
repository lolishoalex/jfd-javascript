// Перебор массивов с помощью for, for of и forEach

// 1-й способ с помощью цыкла for
const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

//console.log(developerNames[1])

for (let i = 0; i < developerNames.length; i += 1) {
    //console.log('i', i)
    console.log('item', developerNames[i])
}

// 2-й способ с помощью цыкла for of

for (const name of developerNames) {
    console.log('name', name)
}

// 3-й способ с помощью функции forEach - самый современный и рекомендуемый
// forEach принимаетв в себя коллбэк

//developerNames.forEach(() =>{})
//или
//developerNames.forEach(function(){})

developerNames.forEach((name, index, array) =>{
    //console.log('name', name)
    //console.log('index', index)
    console.log('array', array)
})
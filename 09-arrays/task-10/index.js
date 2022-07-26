const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
 ]

let matrixConcat = []

for (let i = 0; i < matrix.length; i++) {
    matrixConcat = [...matrixConcat, ...matrix[i]]
}
console.log(matrixConcat)


/*Задача 1
========
Напишите функцию zeroCount в которую на вход поступает массив массивов с произвольным количеством элементов 
(внутренний массив также может быть с произвольным количеством элементов)

Функция должна посчитать количество нулей в 2 мерном массиве.
Используйте любой метод для перебора (for, foreach или другой)
Результат выведете через return, а результат функции напечатайте в консоль console.log(zeroCount(arr))

Пример двумерного массива на вход:*/

let arr = [[0,1,1],[0,1,0],[1,0,0]]
let arr1 = [[0,1,1,0],[0,0,0],[1,0,0,1],[1,0,0,1]]

const zeroCount = (arrIn) => {
    let result = []
    let arrNew = []
    /*for (let j = 0; j < i.length; j++) {
        result = [...result, ...i[j]]
    }*/
    for (let j = 0; j < arrIn.length; j++) {
        for (let g = 0; g < arrIn[j].length; g++) {
            arrNew.push(arrIn[j][g])
            //console.log(arrIn[j][g])
        }
    }
    const resultFilter = arrNew.filter((item) => {
        return item === 0
    }) 
    return resultFilter.length
    //return arrNew
}
console.log(zeroCount(arr1))

/*
Задача 0
Вычислите программно (перебор массива в цикле) и запишите все четные значения из myArrayна консоль.
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

//Ожидаемый результат: 6 4 2 4 16 0*/
/*
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

const myNewArray = myArray.filter((item) => {
    if (item % 2 === 0) {
        return item
    }
    //return item % 2 с остатком и без, там где 0 єто делится
})
console.log(myNewArray)*/

/*Задача 0.1
==========
Давайте немного усложним задачу. В этой задаче нас снова интересуют четные числа, 
но на этот раз числа находятся во вложенных массивах в одном внешнем массиве.
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];*/

let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ]

let myNewArray = []
let myNewArrayFilter = []

for (let i = 0; i < myArray.length; i++) {
    /*myNewArray = [...myNewArray, ...myArray[i]]*/
    for (let h = 0; h < myArray[i].length; h++) {
        if (myArray[i][h] % 2 === 0) {
            myNewArray.push(Math.floor(myArray[i][h] * 1.2))
        }
    }
}
console.log(myNewArray)
/*
myNewArrayFilter = myNewArray.filter((item) => {
    if (item % 2 === 0) {
        return item
    }
})
console.log(myNewArrayFilter)*/
const arrOddSort = [7, 3, 4, 9, 5, 2, 17]

function oddSort(arr) {
    const newArr = arr.filter((elem) => {
        if (elem % 2 != 0) {
            return elem
        } 
    })
    console.log('newArr', newArr)

    newArr.sort((a, b) => {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    })
    console.log('newArr', newArr)

    let indexNewArr = 0

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 != 0) {
            arr[index] = newArr[indexNewArr]
            indexNewArr++
        }
    }
    console.log('arr', arr)
}
oddSort([7, 3, 4, 9, 5, 2, 17] ) // => [3, 5, 4, 7, 9, 2, 17]
// [3, 5, 7, 9, 17]
function unique(arr) {
    const newArr = arr.filter((el, id) => {
        console.log('arr.indexOf(el)', arr.indexOf(el), 'id', id, arr.indexOf(el) === id)
        return arr.indexOf(el) === id
    })
    console.log('newArr', newArr)
}
unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7] 
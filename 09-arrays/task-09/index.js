let arr = []
let arrInside = []
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k += 1) {
      arrInside.push(k + 1)
      //console.log('arrInside = ', arrInside)
}
    arr.unshift(arrInside)
    arrInside = []
    console.log('arr = ', arr)
}
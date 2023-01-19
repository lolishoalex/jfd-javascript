let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]

function unique(arr) {
   let newSet = new Set()
   let newArr = []
   arr.forEach(element => {
      newSet.add(element)
   })

   newSet.forEach((val) => {
      console.log('set', val)
      newArr.push(val)
   })

   return newArr


//return Array.from(new Set(arr)) - короткое решение


}
console.log(unique(values)) // Hare,Krishna,:-O


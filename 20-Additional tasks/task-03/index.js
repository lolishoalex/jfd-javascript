function groupBy(arr, fn) {
   const obj = {}
   //const fnArr = []

   for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      console.log('element', element)
      let fnElement = fn(element)
      console.log('fnElement', fnElement)

      if(!obj[fnElement]){
         obj[fnElement] = []
         console.log('obj[fnElement] = []', obj[fnElement] = [])
      }
      if (fn(element) % 2 == 0 ) {
         obj[fnElement].push(element)
      } else if (fn(element) % 3 == 0 ) {
         obj[fnElement].push(element)
      }
   }
   return obj
}
console.log(groupBy([2.3, 2.2, 3.4], Math.floor))
// result
// {
//  2: [2.3, 2.2],
//  3: [3.4]
// }
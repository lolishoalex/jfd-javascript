let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

function aclean(arr) {
   let map = new Map()

   for (let word of arr) {
     let sorted = word.toLowerCase().split('').sort().join('')
     console.log('sorted', sorted)
     map.set(sorted, word)
     console.log('map.set', map.set(sorted, word))
   }
   return Array.from(map.values())
}
console.log(aclean(arr)) //'nap,teachers,ear' или 'PAN,cheaters,era'


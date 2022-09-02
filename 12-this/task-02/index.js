const dog = {
   name: 'Чарли',
   type: 'Собака',
   makeSound() {
     return 'Гав-Гав'
   }
 }
 
 const bird = {
   name: 'Петя',
   type: 'Воробей',  
   makeSound() {
     return 'Чик-чирик';
   }
 }

function makeDomestic (domestic) {
    const newObj = {
      ...this,
    }
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    newObj.isDomestic = domestic
    return newObj
}
const newMakeDomestic = makeDomestic.bind(dog, true)
console.log(newMakeDomestic())

console.log(makeDomestic.call(bird, false))

console.log(makeDomestic.apply(bird, [false]))
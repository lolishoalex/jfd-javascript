const student = {
   stack: ['HTML'],
   level: 1,
   improveLevel () {
      this.level += 1
      if (this.level === 2) {
         this.stack.push('CSS')
      } else if (this.level === 3) {
         this.stack.push('JavaScript')
      } else if (this.level === 4) {
         this.stack.push('React')
      } else if (this.level === 5) {
         this.stack.push('NodeJS')
      } else if (this.level > 5) {
         console.log('Студент выучил все технологии!')
      }
   console.log(this.stack)//debug
   return this
   }
}
for (let i = 1; i <= 5; i++) {
   console.log('i', i)
   console.log(student.improveLevel())
}
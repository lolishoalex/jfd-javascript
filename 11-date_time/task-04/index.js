const peopleWithVisa = [
   {
       firstName: 'Stasia',
       lastName: 'Ward',
       criminalRecord: true,
       passportExpiration: '19.06.2023',
   },
   {
       firstName: 'Elliot',
       lastName: 'Baker',
       criminalRecord: false,
       passportExpiration: '04.06.2021',
   },
   {
       firstName: 'Leighann',
       lastName: 'Scott',
       criminalRecord: true,
       passportExpiration: '31.07.2022',
   },
   {
       firstName: 'Nick',
       lastName: 'Pop',
       criminalRecord: false,
       passportExpiration: '31.12.2021',
   },
];


//ВАРИАНТ РЕШЕНИЯ С forEach БОЛЕЕ ГРАМОЗДКИЙ
/* const allowVisa = () => {
   const people = []
   peopleWithVisa.forEach((obj) => {
   let passExp = obj.passportExpiration.split('.').reverse()
   passExp = new Date(passExp[0], passExp[1]-1, passExp[2])
   if (obj.criminalRecord === true && Date.now() < passExp.getTime()) {
         people.push(obj)
      }
  })
return people
}
const result = allowVisa(peopleWithVisa)
console.log('result', result) */


//ВАРИАНТ РЕШЕНИЯ С filter БОЛЕЕ ЛЕГКИЙ
const allowVisa = () => {
   const people = peopleWithVisa.filter((obj) => {
      let passExp = obj.passportExpiration.split('.').reverse()
      passExp = new Date(passExp[0], passExp[1]-1, passExp[2])
      if (obj.criminalRecord === true && Date.now() < passExp.getTime()) {
         return obj
      }
   })
   return people
}
const result = allowVisa(peopleWithVisa)
console.log('result', result)
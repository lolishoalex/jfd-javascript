class CarService {
   static DefaultWorkingHours = {
      from: '9:00',
      till: '20:00',
   }

   constructor(name, workingHours) {
      this.name = name
      this.workingHours = workingHours

      this.workingHours = workingHours || CarService.DefaultWorkingHours//вариант короче

      /* if (workingHours === undefined) {
         this.workingHours = CarService.DefaultWorkingHours
      } */
      console.log(this.workingHours)//debug
   }

   repairCar(carName) {
      console.log(carName)//debug
      if (!carName) {//(carName === undefined)
         console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
      } else {
         const date = new Date()
         console.log('date', date)//debug
         const timeNow = date.getHours()
         console.log('timeNow', typeof timeNow, timeNow)//debug

         const hours = Object.values(this.workingHours)
         const splitHours0 = hours[0].split(':')
         const splitHours1 = hours[1].split(':')
         let timeFrom = splitHours0[0]
         let timeTill = splitHours1[0]
         timeFrom = Number(splitHours0[0])
         timeTill = Number(splitHours1[0])
         console.log('timeFrom', typeof timeFrom, timeFrom)//debug
         console.log('timeTill', typeof timeTill, timeTill)//debug

         /* for (const key in this.workingHours) {
            console.log('key', key)
            const value = this.workingHours[key].split(':')
            console.log('value', value)
            const time = Number(value[0])
            console.log('time', typeof time, time)//debug
        } */

         if (timeNow < timeFrom || timeNow >= timeTill) {
            console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
         } else {
            console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
         }
      }
   }

}

const carService = new CarService('RepairCarNow', {from: '8:00', till: '20:00'}) //, {from: '8:00', till: '20:00'}
carService.repairCar('BMW')//'BMW'
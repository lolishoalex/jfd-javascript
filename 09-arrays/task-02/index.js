const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];


const giveParcel = () => {
      const name = peopleWaiting.splice(0, 1)
      const giveParcelPeopleWaitingLength = peopleWaiting.length
      console.log(`${name} получил(а) посылку. В очереди осталось ${giveParcelPeopleWaitingLength} человек.`)
   }


const leaveQueueWithoutParcel = () => {
      let name = peopleWaiting.shift()
      console.log(`${name} не получил(а) посылку и ушел(ла) из очереди`)
   }


for (let i = 0; i < 3; i += 1) {
   giveParcel()
}

const peopleWaitingLength = peopleWaiting.length

for (let i = 0; i < peopleWaitingLength; i += 1) {
   leaveQueueWithoutParcel()
}

//console.log('peopleWaiting', peopleWaiting)
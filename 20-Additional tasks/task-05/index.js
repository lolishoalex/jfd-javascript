function getUserDate () {
   
    let userDate = prompt('Вкажіть дату у форматі dd.mm.yyyy:', '16.02.2023')
    userDate = userDate.trim()
    console.log('userDate', userDate)
    
    const dateSlised = userDate.slice(0, 2)
    console.log('dateSlised', dateSlised)
    
    let monthSlised = userDate.slice(3, 5)
    monthSlised = monthSlised - 1
    console.log('monthSlised', monthSlised)
    
    const yearSlised = userDate.slice(6)
    console.log('yearSlised', yearSlised)
    
    let userDateUpdate = new Date(yearSlised, monthSlised, dateSlised);
    userDateUpdate = userDateUpdate.getTime()
    console.log('userDateUpdate', userDateUpdate)
    
    const userEvent = prompt('Вкажіть назву події:', 'Річниця')
    console.log('userEvent', userEvent)
    
    const startTime = Date.now()
    console.log('startTime', typeof startTime, startTime)
    
    const difference = userDateUpdate - startTime
    console.log('difference', difference)
    
    if (Math.sign(difference) == -1) {
        alert('Дата, яку ви ввели, вже пройшла, введіть правильну дату')
        getUserDate()
    } else if (isNaN(difference)) {
        alert('Дата, яку ви ввели, має не вірний формат, введіть правильну дату')
        getUserDate()
    }

    let days = Math.floor(difference/1000/60/60/24)
    console.log('days', days)
    let hours = Math.floor((difference/1000/60/60) % 24)
    console.log('hours', hours)
    let minutes = Math.floor((difference/1000/60) % 60)
    console.log('minutes', minutes)
    let seconds = Math.floor((difference/1000) % 60)
    console.log('seconds', seconds)
    //gethtmlEventDate(userEvent, days, hours, minutes, seconds)
    getRenewEventDate(startTime, userDateUpdate, userEvent)
}
getUserDate()

function gethtmlEventDate (event, days, hours, min, sec) {
    const h1 = document.querySelector('h1')
    const leftToTheEvent = document.createElement('div')
    leftToTheEvent.className = 'left-to-the-event'
    leftToTheEvent.textContent = `Залишилось до події: ${event}. Днів: ${days}, годин: ${hours}, хвилин: ${min}, секунд: ${sec}`
    h1.append(leftToTheEvent)
}

function getRenewEventDate(startTime, userDateUpdate, eventI) {
    let current = startTime
    let to = userDateUpdate
  
    let timerId = setInterval(function() {
      const newDate = new Date(current)
      const daysI = newDate.getDate()
      const hoursI = newDate.getHours()
      const minutesI = newDate.getMinutes()
      const secondsI = newDate.getSeconds()
      console.log(current, 'date', newDate.getFullYear())
      gethtmlEventDate(eventI, daysI, hoursI, minutesI, secondsI)
      if (current == to) {
        clearInterval(timerId)
      }
      current++
    }, 1000)
}

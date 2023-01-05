import moment from 'moment'
import 'moment-precise-range-plugin'

export const calculateSumOfNumbers = (numbers) => {
   let result = numbers.reduce((sum, current) => sum + current, 0)
   return result
}

export const getFormattedTime = (date) => {
   return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
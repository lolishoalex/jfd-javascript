 const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
 }

 const todaysWinner = {
    prize: '10 000$',
 }

const getWinner = (applicants, winnerObject) => {
    let howManyApplicants = Object.keys(applicants)
    const howManyApplicants1 = Object.values(applicants)
    console.log('howManyApplicants', howManyApplicants);//debug
    console.log('howManyApplicants1', howManyApplicants1);//debug

    /*Object.keys(applicants).forEach((item) => {
        console.log(item)
    }) прием итерирования ключей*/

    howManyApplicants = howManyApplicants.length
    console.log('сколько участников лотереи считая -', howManyApplicants);//debug

    const minCount = 0
    console.log('минимальная цыфра отсчета - ', minCount);//debug

    const maxCount = howManyApplicants
    console.log('максимальная цыфра отсчета - ', maxCount);//debug

    function getRandomNumberInRange(min, max) {
        const randomResult = Math.floor(Math.random() * (max - min)) + min;
        return randomResult
    }
    const randomResult = getRandomNumberInRange(minCount, maxCount)
    console.log('результат рандомного выбора', randomResult)//debug

    /*winnerObject = howManyApplicants1[randomResult]
    console.log('winnerObject', winnerObject)*/

    /*const resultWinner = {
        ...winnerObject,
        ...howManyApplicants1[randomResult],
    }
    return resultWinner еще один способ вернуть resultWinner*/

    return {
        ...winnerObject,
        ...howManyApplicants1[randomResult],
    }
}
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); // { prize: '10 000$', name: 'Максим', age: 25 }
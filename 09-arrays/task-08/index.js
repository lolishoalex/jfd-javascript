const testExpression = ['1', '**', 1]
const testExpression1 = ['100', 4]
const testExpression2 = ['1','**', 1]
const testExpression3 = ['100',"-", 4, '3']
const testExpression4 = ['100v', '300w', 'javascript', ,'help200', '+', 4]
const testExpression5 = ['100','-', '2']

/*
Примеры результатов функции getMathResult:
getMathResult(['200', '+', 300]); // 500 +
getMathResult(['20', '-', '5']); // 15 +
getMathResult([100, '/', 100]); // 1 +
getMathResult([2, '-', 2]); // 0 +
getMathResult(['5', '>', '10']); // false +
getMathResult(['5', '<', '10']); // true +
getMathResult(['1', '=', 1]); // true +
getMathResult(['1', '**', 1]); // Ошибка!
*/

const getMathResult = (expression) => {

    if (expression.length > 3) {
        console.log ("Больше 3х элементов в массиве.")
        console.log(expression.length)
        const expressionFindNan = expression.map((item, index) => {
        console.log("Check Number", index, Number(item))
            if (item === '>' || item === '<' || item === '=' || item === '+' || item === '-' || item === '*' || item === '/') {
                return item
            } else if (Number(item)) {
                return item
            }
        })
        console.log('expressionFindNan', expressionFindNan)
        let expressionFilter = expressionFindNan.filter((item) => {
            return item !== undefined
        })
        expression = expressionFilter
        console.log('expression', expression)
    }

    if (expression.length < 3) {
        return 'Ошибка! Меньше 3х элементов в массиве.'
    } else if (expression.length > 3) {
        return 'Ошибка! Больше 3х элементов в массиве.'
    } else if (expression.length === 3) {
        console.log ("Равен 3м элементам") // дэбаг
        if (Number(expression[0]) && Number(expression[2])) {

        } else {
            return 'Ошибка!'
        }

        let firstSign = Number(expression[0])
        let secondSign = expression[1]
        let therdSign = Number(expression[2])
        let result = 0
        let testError = false
        console.log(firstSign, secondSign, therdSign)
    
        const mathSign = ['>', '<', '=', '+', '-', '*', '/']
        mathSign.forEach((sign, index, array) => {
            if (sign === secondSign) {
            console.log(sign)
            testError = true
            if (sign === '>') {
            result = firstSign > therdSign
            } else if (sign === '<') {
                result = firstSign < therdSign
            } else if (sign === '=') {
                result = firstSign === therdSign
            } else if (sign === '+') {
                result = firstSign + therdSign
            } else if (sign === '-') {
                result = firstSign - therdSign
            } else if (sign === '*') {
                result = firstSign * therdSign
            } else if (sign === '/') {
                result = firstSign / therdSign
            }
            }
        })
        if (!testError) return 'Ошибка!'
        return result
    }
}
console.log(getMathResult(testExpression5))
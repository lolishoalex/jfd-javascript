// JS имеет динамическую типизацию, мы имеем возможность изменять типы данных переменных

// Типы преобразования переменных- всего их 3
// 1. преобразование к строке
// 2. преобразование к числу
// 3. преобразование к boolean
// любая переменная может быть преобразована к одному из трех типов данных

// 1. преобразование к строке

// явное преобразование - рекомендуется, потомучто благодяря этому способу минимизируется образование багов

const age = 20;
console.log('number age:', typeof age);
console.log('string age:', String(age)); // для преобразования в cтроку существует специальная функция String()
console.log('string age:', typeof String(age)); // данный тип преобразования называется явным, потомучто мы явно указываем что хотим привести значение age к строке

// неявное преобразование

const updatedAge = '1' + 20;
console.log('updatedAge:', typeof updatedAge); // данный тип преобразования называется неявным, потомучто сразу не понятко что наше значение updatedAge в будущем станет срокой

// 2. преобразование к числу

// явное преобразование

const expirienceInJaveScript = '5';
console.log('string expirienceInJaveScript:', typeof expirienceInJaveScript);
console.log('number expirienceInJaveScript:', Number(expirienceInJaveScript)); // для преобразования к числу существует специальная функция Number()
console.log('number expirienceInJaveScript:', typeof Number(expirienceInJaveScript)); // проверка типа данных

// неявное преобразование

console.log('expirienceInJaveScript:', +expirienceInJaveScript);
console.log('expirienceInJaveScript:', typeof +expirienceInJaveScript);

// не все значения можно преобразовать к типу данных число

console.log('Hello World', Number('Hello World')); // будет выведено значение NaN - это not a number (не число)


// 3. преобразование к boolean

// явное преобразование

console.log('Hello', Boolean('Hello')); // для преобразования к Boolean существует специальная функция Boolean()

console.log('5', Boolean(5)); // почти все значения которые прпреобразовываются в Boolean, приводятся к true

// значения которые прпреобразовываются в Boolean, приводятся к false - null, undefined, NaN, 0, ''

console.log('null', Boolean(null));
console.log('undefined', Boolean(undefined));
console.log('NaN', Boolean(NaN));
console.log('0', Boolean(0));
console.log('', Boolean('')); // значение будет false, потому что длина строчки 0
console.log('0', Boolean('0')); // значение будет true, потому что длина строчки 1





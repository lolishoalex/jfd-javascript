// 1 function declaration
function getName1(name) { // определение функции
   console.log(`Имя равно ${name}`)
  
}

getName1('Olga')

// 2 function expression
const getName2 = function(name) {
   console.log(`Имя равно ${name}`)
}

getName2('Sasha')

// 3 стрелочные функции
const getName3 = (name) => {
   console.log(`Имя равно ${name}`)
}

getName3('Sveta')
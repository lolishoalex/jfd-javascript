//Всплытие и погружение - две основных фазы у каждого обработчика событий, которые можно отслеживать
//Погружение начинается от Window и до целевого эл-та на котором сработал обработчика событий
//Всплытие начинается от эл-та на котором сработал обработчика событий и до Window
//Прекращение всплытия - реализуется с помощью метода stopPropagation

const allElements = document.querySelectorAll('*')

allElements.forEach(elem => {
    // elem.addEventListener('click', () => {//отслеживаем стадии всплытия
    //    alert(`Всплытие: ${elem.tagName}`) 
    // })
    elem.addEventListener('click', (event) => {//прекращение всплытия
        if (event.currentTarget.tagName === 'FORM') {//currentTarget эл-нт на котором срабатывает событие СЕЙЧАС
            event.stopPropagation()
        }
        alert(`Всплытие: ${elem.tagName}`) 
     })
    // elem.addEventListener('click', () => {//отслеживаем стадии погружения за счет 3-го параметра true
    //     alert(`Погружение: ${elem.tagName}`) 
    //  }, true)
});
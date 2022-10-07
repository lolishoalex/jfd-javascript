/* <form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя" />
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль" />
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form> */

//через innerHTML**************

//const form = document.createElement('form')
// document.body.innerHTML = '<form class="create-user-form">'+
// '<label>Имя<input type="text" name="userName" placeholder="Введите ваше имя" /></label>'+
// '<label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль" /></label>'+
// '<button type="submit">Подтвердить</button>'+
// '</form>'

// const h1 = document.querySelector('h1')
// document.body.prepend(form)
// document.body.prepend(h1)


//через document.createElement***************

const theBody = document.body
const myForm = document.createElement('form')
const theH1 = document.querySelector('h1')
theH1.insertAdjacentElement('afterend', myForm)


myForm.className = 'create-user-form'

const myLabel1 = document.createElement('label')
myForm.insertAdjacentElement('afterbegin', myLabel1)
myLabel1.textContent = 'Имя'

const inputText = document.createElement('input')
myLabel1.insertAdjacentElement('afterbegin', inputText)
myLabel1.append(inputText)
inputText.type = 'text'
inputText.name = 'userName'
inputText.placeholder = 'Введите ваше имя'

const myLabel2 = document.createElement('label')
myForm.insertAdjacentElement('afterbegin', myLabel2)
myForm.append(myLabel2)
myLabel2.textContent = 'Пароль'

const inputPass = document.createElement('input')
myLabel2.insertAdjacentElement('afterbegin', inputPass)
myLabel2.append(inputPass)
inputPass.type = 'password'
inputPass.name = 'password'
inputPass.placeholder = 'Придумайте Пароль'

const myButton = document.createElement('button')
myForm.insertAdjacentElement('afterbegin', myButton)
myForm.append(myButton)
myButton.type = 'submit'
myButton.textContent = 'Подтвердить'
console.log(myForm)
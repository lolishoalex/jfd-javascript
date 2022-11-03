// State
// =================

//урл с данными
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


// Functions
// =================

//выводим имена в html
const createUserElem = (text) => {
    const userElement = document.createElement('li');
    const userElementAncor = document.createElement('a');
    userElementAncor.href = '#';
    userElementAncor.textContent = text;
    userElement.append(userElementAncor);

    return userElement;
}

//лоудер
const myLoader = () => {
    const loaderHtml = document.querySelector('#loader');
    const isHidden = loaderHtml.hasAttribute('hidden');
    if (isHidden) {
        loaderHtml.removeAttribute('hidden');
    } else {
        loaderHtml.setAttribute('hidden', '');
    }
}

//ищем контейнер в штмл
const dataContainer = document.querySelector('#data-container');

//создаем ф-ю для fetch
const getAllUsers = () => {
    myLoader();
    const result = fetch(USERS_URL, {
        method: 'GET',
    })
    console.log(result);
    
    result
        .then((response) => {
            console.log('response', response);
            return response.json();
        })
        .then((users) => {
            console.log('users', users);
            users.forEach(user => {
                const userHtml = createUserElem(user.name);
                dataContainer.append(userHtml)
            });
        })
        .catch((err) => {
            console.log('err', err);
        })
        .finally(() => {
            myLoader();
        })
};

// Application
// =================
getAllUsers();
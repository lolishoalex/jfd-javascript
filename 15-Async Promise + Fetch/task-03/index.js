// State
// =================

//урл с данными
const FOTO_URL = 'https://jsonplaceholder.typicode.com/photos';


// Functions
// =================

//выводим имена в html
const createPhotoElem = (url, title, id) => {
    const photoElement = document.createElement('li');
    photoElement.className = 'photo-item';
    photoElement.id = id;
    const photoElementImg = document.createElement('img');
    photoElementImg.className = 'photo-item__image';
    photoElementImg.src = url;
    photoElement.append(photoElementImg);
    const photoElementH3 = document.createElement('h3');
    photoElementH3.className = 'photo-item__title';
    photoElementH3.textContent = title;
    photoElement.append(photoElementH3);


    return photoElement;
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
const getFastestLoadedPhoto = (ids) => {
    myLoader();
    
    const requests = ids.map((id) => fetch(`${FOTO_URL}/${id}`));
    console.log(requests);

    Promise.race(requests)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((photo) => {
            console.log('photo', photo);
            const photoHtml = createPhotoElem(photo.url, photo.title, photo.id);
            dataContainer.append(photoHtml)
        })
        .catch((err) => {
            console.error('err', err);
        })
        .finally(() => {
            myLoader();
        })
};

// Application
// =================
getFastestLoadedPhoto([60, 12, 55]);
// State
// =================

//урл с данными
const FOTO_URL = 'https://jsonplaceholder.typicode.com/photos';


// Functions
// =================

//выводим имена в html
const createPhotoElem = (url, title) => {
    const photoElement = document.createElement('li');
    photoElement.className = 'photo-item';
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

    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((photos) => {
            console.log('photos', photos);
            photos.forEach(photo => {
                const photoHtml = createPhotoElem(photo.url, photo.title);
                dataContainer.append(photoHtml)
            });
        })
        .catch((err) => {
            console.error('err', err);
        })
        .finally(() => {
            myLoader();
        })
        Promise.race(requests)
            .then((result) =>{
                    console.log('result', result);
            })
            .catch((error) =>{
                console.log('error', error);
            })
            .finally(() => {})
    };

// Application
// =================
getFastestLoadedPhoto([60, 12, 55]);
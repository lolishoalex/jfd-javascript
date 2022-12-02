const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

//start html
const startHtml = () => {
    const h1 = document.querySelector('h1')
    const albumList = document.createElement('ul')
    albumList.className = 'data-container'
    h1.insertAdjacentElement('afterend', albumList)

    const loaderSpan = document.createElement('span')
    loaderSpan.id = 'loader'
    loaderSpan.textContent = 'Загрузка...'
    loaderSpan.hidden = true
    albumList.append(loaderSpan)
}

//лоудер
const myLoader = () => {
    const loaderHtml = document.querySelector('#loader')
    const isHidden = loaderHtml.hasAttribute('hidden')
    if (isHidden) {
        loaderHtml.removeAttribute('hidden')
    } else {
        loaderHtml.setAttribute('hidden', '')
    }
}

const createElementLi = (text) => {
    const element = document.createElement('li')
    element.textContent = text

    return element
}
 
const renderAlbums = async () => {
    
    try {
        startHtml()
        myLoader()
        const request = await fetch(`${ALBUMS_URL}`)
        console.log('request', request)
        const allAlbumsData = await request.json()
        console.log('allAlbumsData', allAlbumsData)

        const dataContainer = document.querySelector('.data-container')

        allAlbumsData.forEach(album => {
            const albumLi = createElementLi(album.title)
            dataContainer.append(albumLi)
        })

    } catch (error){
        console.log('error', error)

        const dataContainer = document.querySelector('.data-container')
        dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
    } finally {
        myLoader()
    }
}
renderAlbums()
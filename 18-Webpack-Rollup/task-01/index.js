import "./index.css";
import JS_IMAGE from './assets/16x9.png';

const iLoveJS = document.createElement('h1')
iLoveJS.className = 'iLoveJS-h1'
iLoveJS.textContent = 'I love JavaScript'

document.body.append(iLoveJS)

const jSImageHtml = document.createElement('img')
jSImageHtml.className = 'js-image'
jSImageHtml.src = JS_IMAGE

document.body.append(jSImageHtml)


console.log('Hello World!')
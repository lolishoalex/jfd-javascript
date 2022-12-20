import "./index.css"
import JS_IMAGE from './assets/640px-JavaScript-logo.png';

const jSImageHtml = document.createElement('img')
jSImageHtml.className = 'js-image'
jSImageHtml.src = JS_IMAGE

document.body.append(jSImageHtml)

console.log('Hello World!')

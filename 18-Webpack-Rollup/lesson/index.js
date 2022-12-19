import "./index.css"
import JS_IMAGE from './assets/640px-JavaScript-logo.png';



const jSImageHtml = document.createElement('img')
jSImageHtml.className = 'js-image'
jSImageHtml.src = JS_IMAGE

document.body.append(jSImageHtml)

//Webpack / Rollup - это сборщики проектов

/* 
Для начала устанавливаем NodeJS -
это среда разроботки в которой мы можем запускать код.
Вместе с NodeJS установится также и NPM - это Node Package 
Manager наших пакетов. С помощью NPM мы можем устанавливать 
нужные нам библиотеки такие как Webpack и Rollup и 
использовать их в нащем коде.
*/

//Установка Rollup. Базовая конфигурация проекта
/* 
Чтобы иницилизировать проект и начать устанавливать
пакеты, нужно создать файл package.json, это делается с 
помощью команды npm init -y. package.json - будет хранить 
данные о наших установленных пакетах и данные о нашем проекте.
 */

console.log('Hello World!')

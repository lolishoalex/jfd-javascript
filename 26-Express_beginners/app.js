//import
const express = require('express')
const expressLayouts = require('express-ejs-layouts')


const app = express()
const port = 3000


//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set Tamplate Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', './layouts/full-width')

//Navigation
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar' })
})

//Listen on Port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
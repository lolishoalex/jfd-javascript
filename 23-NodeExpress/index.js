let express = require('express')
const path = require('path')

let app = express()
let publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/student', (req, res) => {
    const data = {
        name: 'Lola',
        email: 'lola@email.com',
        age: 17,
        subject: ['Math', 'Biology', 'History', 'Spanish']

    }
    res.render('student', {student:data})
})

app.get('/blog', (req, res) => {
    res.sendFile(`${publicPath}/blog.html`)
})

app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`)
})



app.listen(4000)
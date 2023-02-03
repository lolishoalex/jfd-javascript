
module.exports = MW = (req, res, next) => {
    if(!req.query.age){
        res.send('Please provide age')
    } else if(req.query.age < 18){
        res.send('You are too young')
    } else {
        next()
    }
}
const express = require('express')
const app = express()
const hbs = require('hbs')
const pirateController = require('./controllers/pirates.js')

//views
app.set("view engine", "hbs")
//controller
app.use("/pirates", pirateController);
//Home
app.get('/', (req,res) => {
    res.send('This is our home')
})











const port = 3000
app.listen(port, () => {
    console.log('listening')
})
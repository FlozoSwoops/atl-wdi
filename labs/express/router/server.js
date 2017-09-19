const express = require('express')
const app = express()
const hbs = require('hbs')
//const mathController = require('.controllers/math.js')



app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));


const PORT = process.env.Port|| 3000;

app.listen(PORT, () => {
    console.log('active')
})




//your code below
const express = require('express')
var pirates = require('../models/pirates.js');
const router = express.Router()


router.get('/', (req,res) => {
    res.render('hi')
    console.log('../pirates')
    pirates: pirates;

})

router.post('/pirates', (req,res) => {
    res.redirect('/pirates')
})

module.exports = router;
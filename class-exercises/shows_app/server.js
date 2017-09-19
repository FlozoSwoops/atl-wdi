const express = require('express')
const app = express()
const hbs = require('hbs')

app.set("view engine", "hbs")

app.get('/shows', (req,res) => {
    const faveShows = ['Gundam Wing', 'The League', 'The Strain']

    res.render('favoriteShows'), {
        faveShows: faveShows
    }
})


const PORT = process.env.Port || 3000;

app.listen(PORT, () => {
    console.log('listening')
})
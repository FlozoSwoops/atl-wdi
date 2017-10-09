//======================
// REQUIREMENTS
//======================
const express = require('express')
const router = express.Router()
const Schema = require('../models/donuts.js')
const DonutModel = Schema.DonutModel

//======================
// INDEX
//======================
router.get('/', (request, response) => {
    DonutModel.find({})
        .then((donuts) => {
            response.render('donut/index', {
                donuts: donuts
            })
        })
        .catch((error) => {
            console.log(error)
        })
})


//======================
// NEW
//======================
router.get('/new', (request, response) => {
    response.render('donuts/new')
})

//======================
// CREATE
//======================
router.post('/', (request, response) => {
    const newDonut = request.body
    DonutModel.create(newDonut)
        .then(() => {
            response.redirect('/donuts')
        })
        .catch((error) => {
            console.log(error)
        })
})



//======================
// EDIT
//======================
router.get('/:donutId/edit', (request, response) => {
    const donutId = request.params.donutId
    DonutModel.findById(donutId)
        .then((donut) => {
            response.render('donuts/edit', {
                donut: donut
            })
        })
        .catch((error) => {
            console.log(error)
        })
})



//======================
// UPDATE
//======================
router.put("/:id", (request, response) => {
    const donutId = request.params.id
    const updatedDonut = request.body
    DonutModel.findByIdAndUpdate(donutIdToUpdate, updatedDonut, { new: true })
        .then(() => {
            response.redirect(`/donuts/${donutIdToUpdate}`)
        })
        .catch((error) => {
            console.log(error)
        })
})

//======================
// SHOW
//======================
router.get('/:donutId', (request, response) => {
    const donutId = request.params.donutId
    DonutModel.findById(donutId)
        .then((donut) => {
            response.render('donuts/show', {
                donut: donut
            })
        })
        .catch((error) => {
            console.log(error)
        })
})


//======================
// DELETE
//======================
router.get('/:donutId/delete', (request, response) => {
    const donutId = request.params.donutId
    DonutModel.findByIdAndRemove(donutId)
        .then(() => {
            response.redirect('/donuts')
        })
        .catch((error) => {
            console.log(error)
        })
})


//======================
// EXPORTS
//======================
module.exports = router
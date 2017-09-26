const express = require('express')
const router = express.Router()
const data = require('../data.js')
router.get('/', (req, res) => {
    var seededTodos = [
        {
            description: "get beer",
            urgent: true
        }, {
            description: "dry cleaning",
            urgent: false
        }
    ];

    res.render('todos/index', {
        todos: seededTodos
    });
});

//show todos

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id]

    if (!todo) {
        res.render('todos/show', {
            error: "no to-do found with this ID"
        })
    }
    else {
        res.render('todos/show', {
            todo: todo
        })
    }
})

router.get('/new', (req, res) => {
    res.render('todos/new')
})


module.exports = router
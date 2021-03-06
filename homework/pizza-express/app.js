const express = require('express');
const app = express()
const hbs = ('hbs')

app.set('viewenine', 'hbs')
app.set('views','./views')

app.get("/", (req,res) => {
    res.render("Welcome to pizza Express")
});

app.get("/toppings/:type", (req,res) => {
    res.render(`${req.params.type} pizza! Good choice!`)
})

app.get("/order/:amount/:size", (req,res) => {
    res.render(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`)

});

var port = 3000

app.listen (port, () => {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });
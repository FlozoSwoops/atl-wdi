//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require("hbs");
var logger = require('morgan');


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/donut_store')
const db = mongoose.connection
// lets you know when mongoose is connected
db.on ('open', () => {
    console.log ('Mongoose is connected')
})
db.on('error', (er) => console.log(err)
)
//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
// var donutsController = require('./controllers/donuts.js');
// app.use('/', donutsController);

//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"


db.once('open', function () {
    console.log("DB connected");
});


const PORT = 3000
app.listen(PORT, () => {
    console.log('successfully connected')
})

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000

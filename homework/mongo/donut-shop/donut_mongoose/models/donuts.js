//requirements: require mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

//create your donut schema:
const donutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number,
})

// model creates a data type called donut it will follow the model of donutSchema
const DonutModel = mongoose.Model('Donut', donutSchema)

//export your donut with module.exports()
 module.exports = DonutModel
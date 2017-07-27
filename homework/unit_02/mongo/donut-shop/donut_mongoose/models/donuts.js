//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//create your donut schema:
var donutSchema = new Schema ({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

var DonutModel = mongoose.model("Donuts", donutSchema);

//export your donut with module.exports()
module.exports = DonutModel;
//requirements: require mongoose


//create your donut schema:
var DonutModel = mongoose.model('Donut', donutSchema);
//export your donut with module.exports()
module.exports = {
    donut: DonutModel
}
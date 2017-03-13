
//few dependecies
var restful = require('node-restful');
var mongoose = restful.mongoose;  //extending of mongoose


//schema
var stockSchema = new mongoose.Schema({
    symbol: String,
    open: Number,
    close: Number
})

module.exports = restful.model('Products', stockSchema);

console.log('stock api is running !')
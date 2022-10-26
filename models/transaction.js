const mongoose = require('mongoose');


// Transaction Model
const transactionModel = new mongoose.Schema({
    payer: {type: String},
    points: {type: Number},
    timeStamp: {type: Date}
})


module.exports = mongoose.model('Transactions', transactionModel);
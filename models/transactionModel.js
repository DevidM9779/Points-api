const mongoose = require('mongoose');


// Transaction Model
const transactionModel = new mongoose.Schema({
    payer: {type: String},
    points: {type: Number},
    timestamp: {type: Date}
})


module.exports = mongoose.model('pointsDB', transactionModel, 'Transactions');
const mongoose = require('mongoose');


// Transaction Model
const transactionModel = new mongoose.Schema({
    payer: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model('pointsDB', transactionModel, 'Transactions');
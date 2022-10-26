const transaction = require('../models/transactionModel')

exports.post = async (req, res) => {
    req.body.timestamp = new Date(req.body.timestamp)
    await transaction.insertMany(req.body).then(res.send(typeof req.body.timestamp))
}


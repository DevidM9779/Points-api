const transaction = require('../models/transaction')

exports.post = async (req, res) => {
    req.body.timestamp = new Date(req.body.timestamp)

    await transaction.insertMany(req.body).then(res.send('added'))
}


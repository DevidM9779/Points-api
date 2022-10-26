const transaction = require('../models/transactionModel')

exports.post = async (req, res) => {
    // Check if is an array with all the transactions to execute all of them at once
    if (Array.isArray(req.body)) {
        for (let entry of req.body) {
            entry.timestamp = new Date(entry.timestamp)
            await transaction.insertMany(entry).then( () => console.log(entry) )
        }
        res.send('Added')
    }
    // Else execute a single transaction
    else {
        req.body.timestamp = new Date(req.body.timestamp)
        await transaction.insertMany(req.body).then(res.send(typeof req.body.timestamp))
    }
}


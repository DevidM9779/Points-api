const transaction = require('../models/transactionModel')

exports.add = async (req, res) => {
    // Check if is an array with all the transactions to execute all of them at once
    try {
        if (Array.isArray(req.body)) {
            for (let entry of req.body) {
                entry.timestamp = new Date(entry.timestamp)
                await transaction.insertMany(entry)
            }
        }
        // Else execute a single transaction
        else {
            req.body.timestamp = new Date(req.body.timestamp)
            await transaction.insertMany(req.body)
        }
        res.send('Added')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.delete = async (req, res) => {
    try {
        await transaction.collection.drop().then( () => res.send('Deleted') )
    } catch (error) {
        res.status(500).send("Database not found; Possibly already deleted.")
    }
}


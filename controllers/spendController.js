const transaction = require('../models/transactionModel')

exports.spend = async (req, res) => {


    const points = req.body.points
    if (!points) return res.status(400).send("Points field is required");

    // Get transaction history from db
    let transactions = await transaction.find({}).sort({'timestamp': 'asc'})
    // Go through it to determine how many points should be taken away from each payer
    let spentRecord = getSpent(points, transactions)

    await addRecordToDB(transactions[transactions.length - 1].timestamp, spentRecord)

    res.send(spentRecord)

}

const getSpent = (points, transactions) => {
    let spent = {}
    let remainingPoints = points

    for (let transaction of transactions) {

        // Calculate how many points will be taken away
        let pointsToTakeAway = 0

        if (transaction.points > 0) {
            pointsToTakeAway = remainingPoints - transaction.points >= 0 ? transaction.points : remainingPoints
        } else {
            pointsToTakeAway = transaction.points
        }

        // Add or update spent record
        if (remainingPoints > 0) {
            if (!spent.hasOwnProperty(transaction.payer)) {
                spent[transaction.payer] = -1 * pointsToTakeAway
            } else {
                spent[transaction.payer] -= pointsToTakeAway
            }

            // Keep track of how many points are left to be taken away
            remainingPoints -= pointsToTakeAway

        } else {
            if (!spent.hasOwnProperty(transaction.payer)) {
                spent[transaction.payer] = 0
            }
        }
    }

    return spent
}


const addRecordToDB = async (date, spentRecord) => {
    // Ensure that this transaction will be the most recent one
    let newDate = date
    newDate.setDate(date.getDate() + 1)

    // Create transactions and add them to the db
    for (let key in spentRecord) {
        if (spentRecord[key] === 0) continue
        let json = {
            payer: key,
            points: spentRecord[key],
            timeStamp: newDate
        }
        await transaction.insertMany(json)
    }

}
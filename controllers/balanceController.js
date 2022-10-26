const transaction = require('../models/transactionModel')

exports.findAll = async (req, res) => {
    let transactions = await transaction.find({}).sort({'timestamp': 'asc'})
    console.log(transactions)
    res.send(getBalance(transactions))
}


/*
    Calculate balance from reading through the transactions history
 */

const getBalance = (transactions) => {
    let balance = {}
    for (let transaction of transactions) {

        if (!balance.hasOwnProperty(transaction.payer)) {
            balance[transaction.payer] = transaction.points
        } else {
            balance[transaction.payer] += transaction.points
        }
        console.log(balance)
    }

    return balance
}
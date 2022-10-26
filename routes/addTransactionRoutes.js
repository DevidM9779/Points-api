let express = require('express')
let router = express.Router();
let addTransactions = require('../controllers/transactionController')

// Routes
router.post('/add', addTransactions.post)

module.exports = router;
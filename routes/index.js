const express = require('express')
const router = express.Router()
let addTransactionRoutes = require('./addTransactionRoutes')
let spendRoutes = require('./spendRoutes')
let balanceRoutes = require('./balanceRoutes')


// routes
router.use('', addTransactionRoutes)
// router.use('', addAllTransactionsRoutes)
router.use('', spendRoutes)
router.use('', balanceRoutes)


module.exports = router
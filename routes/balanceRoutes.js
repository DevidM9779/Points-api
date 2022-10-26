const express = require('express')
const router = express.Router()
let balanceController = require('../controllers/balanceController')

router.get('/balance', balanceController.findAll)

module.exports = router
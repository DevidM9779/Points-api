const express = require('express')
const router = express.Router();
let transactionController = require('../controllers/transactionController')

// Routes
router.post('/add', transactionController.add)
router.delete('/delete', transactionController.delete)

module.exports = router;
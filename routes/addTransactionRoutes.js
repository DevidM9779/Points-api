const express = require('express')
const router = express.Router();
let transactionController = require('../controllers/transactionController')

// Routes
router.post('/add', transactionController.post)

module.exports = router;
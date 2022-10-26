const express = require('express')
const router = express.Router();
let spendController = require('../controllers/spendController')

// Routes
router.post('/spend', spendController.spend)

module.exports = router;
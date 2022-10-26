const express = require('express')
const router = express.Router()


router.get('/balance', (req, res) => {
    res.send({points: 5000})
})

module.exports = router
let express = require('express')
let router = express.Router();


router.post('/spend', (req, res) => {
    res.send('spent')
})




module.exports = router;
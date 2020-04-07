const express = require('express') // get an insident of express object
const router = express.Router()     // get an router obj from express

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router

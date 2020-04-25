const express = require('express') // get an insident of express object
const router = express.Router()     // get an router obj from express
const Book = require('../models/book')

router.get('/', async (req, res) => {
    let books
    try {
        books = await Book.find().sort({ createAt: 'desc'}).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books})
})

module.exports = router

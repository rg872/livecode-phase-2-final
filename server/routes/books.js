const router = require('express').Router()
const { decryptToken } = require('../middlewares/auth.middleware')
const multer = require('../helpers/image.helper')
const { sendUploadToGCS } = require('../middlewares/image.middleware')
const { createBook, getAllBooks, deleteBook } = require('../controllers/book.controller')

router
    .post('/', decryptToken, multer.single('image'), sendUploadToGCS, createBook)
    .get('/', decryptToken, getAllBooks)
    .delete('/:id',decryptToken, deleteBook)

module.exports = router
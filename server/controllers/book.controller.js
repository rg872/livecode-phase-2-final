const User = require('../models/users.model')
const Book = require('../models/books.model')
const Review = require('../models/reviews.model')

module.exports = {
    createBook (req, res) {
        let { email } = req.payload

        User.findOne({email})
        .then(user => {
            if(user){
                req.body = Object.assign({
                    rating: 0,
                    reviews: [],
                    uploader: user._id,
                    image: req.file.cloudStoragePublicUrl
                }, req.body)

                let new_book = new Book(req.body)
                let validationError = new_book.validateSync()
                if (validationError) {
                    res.status(400).json({
                        message: validationError.message
                    })
                } else {
                    new_book.save()
                    .then(book => {
                        User.findByIdAndUpdate(user._id, { $push: { books: book._id } })
                        .then(() => {
                            res.status(200).json({
                                message: 'success create new book',
                                book
                            })
                        })
                    })
                }
            } else {
                res.status(400).json({
                    message: 'cant find user'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'server error'
            })
        })
        
    },

    getAllBooks (req, res) {
        Book.find({})
        .populate('uploader', ['name', '_id'])
        .populate({
            path: 'reviews',
            populate: {
                path: 'reviewer',
                select: 'name'
            }
        })
        .then(books => {
            res.status(200).json({
                message: 'success get all book',
                books
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'server error'
            })
        })
        
    }
}
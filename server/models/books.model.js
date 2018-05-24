const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'book title is required'],
        minlength:[1, 'book title cant be empty']
    },
    description: {
        type: String,
        required: [true, 'book description is required'],
        minlength:[30, 'book description at least have 30 cahracters']
    },
    rating: {
        type: Number,
        min: [0, 'Error, rating cant be minus']
    },
    reviews: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }]
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String

},{
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    detail: {
        type: String,
        required: [true, 'review detail is required'],
        minlength:[25, 'review detail at least have 25 characters']
    },
    like: {
        type: Number
    },
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
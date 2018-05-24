const mongoose = require('mongoose')
const { encryptPassword } = require('../helpers/password.helper')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email cannot be empty'],
        unique: true,
        validate: {
            validator: function(email){
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                let checkEmail = re.test(String(email).toLowerCase())
                return checkEmail
            },
            message: 'email is not in valid format'
        }
    },
    password: {
        type: String,
        required: [true, 'password cannot be empty'],
        minlength: [6, 'password must be 6 character or longer']
    },
    books: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }]
    }
},{
    timestamps: true
})

userSchema.pre('save', function () {
    this.password = encryptPassword(this.password)    
})

const User = mongoose.model('User', userSchema)

module.exports = User
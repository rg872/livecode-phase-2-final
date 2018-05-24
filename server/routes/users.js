const express = require('express')
const router = express.Router()
const { decryptToken } = require('../middlewares/auth.middleware')
const { signUp, signIn, oAuth } = require('../controllers/user.controller')

/* GET users listing. */
router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/oauth', oAuth)

module.exports = router

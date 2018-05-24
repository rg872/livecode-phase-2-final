const router = require('express').Router()
const { decryptToken } = require('../middlewares/auth.middleware')

module.exports = router
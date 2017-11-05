const express = require('express')
const router = express.Router()

router.use('/login', require('./login'))
router.use('/post', require('./post'))
router.use('/user', require('./user'))
router.use('/sign-up', require('./sign-up'))
router.use('/college', require('./college'))

module.exports = router

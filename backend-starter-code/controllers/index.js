const express = require('express')
const router = express.Router()
router.use('/', require('./college'))

module.exports = router

const express = require('express');
const router = express.Router();

router.use('/login', require('./login'))
router.use('/post', require('./post'))
router.use('/users', require('./user'))
router.use('/sign-up', require('./sign-up'))

module.exports = router;
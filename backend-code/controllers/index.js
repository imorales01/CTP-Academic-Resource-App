const express = require('express');
const router = express.Router();

router.use('/colleges', require('./colleges'));
router.use('/departments', require('./departments'));
router.use('/courses', require('./courses'));
router.use('/books', require('./books'));
router.use('/login', require('./login'))
router.use('/post', require('./post'))
router.use('/users', require('./user'))
router.use('/sign-up', require('./sign-up'))

router.use('/', require('./home'));

module.exports = router;
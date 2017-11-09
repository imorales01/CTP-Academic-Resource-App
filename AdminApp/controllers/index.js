const express = require('express');
const router = express.Router();

router.use('/colleges', require('./colleges'));
router.use('/departments', require('./departments'));
router.use('/courses', require('./courses'));
router.use('/books', require('./books'));

router.use('/', require('./home'));

module.exports = router;
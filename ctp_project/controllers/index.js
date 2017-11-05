const express = require('express');
const router = express.Router();

router.use('/courses', require('./courses'));
router.use('/departments', require('./departments'));
router.use('/colleges', require('./colleges'));
router.use('/', require('./home'));

module.exports = router;
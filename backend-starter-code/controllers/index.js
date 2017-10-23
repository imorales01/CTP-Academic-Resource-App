const express = require('express');
const router = express.Router();


router.use('/books', require('./books'));
router.use('/', require('./home'));



module.exports = router;

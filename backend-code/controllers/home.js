const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: "Successful GET to '/' route. THIS SHOULD BE THE HOMEPAGE!"
  });
});

module.exports = router;


const express = require('express');
const passport = require('../middlewares/authentication');
const router = express.Router()

// passport.authenticate: a passport callback method that authenticates the user if the authenticate method fails stops and returns 401 if succeds returns: success: true
//  Path: http://localhost:8000/api/login
router.post('/', passport.authenticate('local'), (req, res) => {
  console.log('You are loged in!!')
  return res.json({ success: true, user: req.user });
})


module.exports = router;


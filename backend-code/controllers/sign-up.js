const express = require('express')
const models = require('../models')
const router = express.Router()


 // creates a user: email, user and cunyid must be unique
router.post('/', (req, res) => {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    cunyId: req.body.cunyId,
    college: req.body.college,
    password: req.body.password,
  })
    .then((user) => {

      // passport.authenticate('local') function()


//       , (req, res) => {
//   console.log('You are loged in!!')
//   return res.json({ success: true, user: req.user });
// }




      res.json(user)
    })
    .catch((err) => {
      console.log('ERROR while creating a new user', err)
    })
})

module.exports = router;

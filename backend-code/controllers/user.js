const express = require('express')
const models = require('../models')
const router = express.Router()
const Post = require('../models/post');

// ADDING IMAGE
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

// const upload = multer({dest: path.join(__dirname,'../images')});
const upload = multer({ storage });



//  gets a User by userName with all user posts:http://localhost:8000/api/users/Luis123
router.get('/:userName', (req, res) => {
  models.User.findOne({
    where: {userName: req.params.userName},
    include: [{model: models.Post}]
  })
  .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting a user with his/her information', err)
      res.redirect('/error')
    })
})

//  gets all User: http://localhost:8000/api/users
router.get('/', (req, res) => {
  models.User.findAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll SUser', err)
      res.redirect('/error')
    })
})


// express route where we receive files from the client passing multer middleware
router.put('/:userName/picture', 
  upload.single('post-img'), 
  (req, res) => {
  const file = req.file; // file passed from client
  const meta = req.body; // all other values passed from the client, like name, etc..

  console.log(file)

  models.User.findOne({
    where: {userName: req.params.userName}
  })
  .then((user) => {
    user.update({
      image: file.path
    })
  })
  .then((data) => {

    res.json({message: 'SUCCESS', file })
  })
  .catch((err) => {
    console.log('ERROR while getting a user with his/her information', err)
    res.sendStatus(400)
  })
})





module.exports = router

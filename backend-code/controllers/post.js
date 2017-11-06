const express = require('express')
const models = require('../models')
const router = express.Router()
const User = require('../models/user')
const getSlug = require('speakingurl')
const Redirect = require('../middlewares/redirect')

// get all posts: http://localhost:8000/api/post
router.get('/', (req, res) => {
  models.Post.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll Post', err)
      res.redirect('/error')
    })
})

// creates a post
router.post('/new-post', (req, res) => {
  // models.Post.create({
  //   title: req.body.title,
  //   body: req.body.body
  // })
  req.post.createPost({
      slug: getSlug(req.body.title.toLowerCase()),
      title: req.body.title.toLowerCase(),
      body: req.body.body,
  })
    .then((college) => {
      res.send(college)
    })
    .catch((err) => {
      console.log('ERROR while creating a new College', err)
      res.send('/error')
    })
})

// gets a post by slug
router.get('/:username/:slug', (req, res) => {
	 models.Post.findOne({
      where: {
        slug: req.params.slug,
      },
      include: [{
        model: models.User,
        where: {
          username: req.params.username,
        },
      }],
    })
	 .then((college) => {
      res.send(college)
    })
    .catch((err) => {
      console.log('ERROR while creating a new College', err)
      res.send('/error')
    })
})

// updates a post 
router.put('/:username/:slug', (req, res) => {
	models.Post.findOne({
		where: {slug: req.params.slug},
		include: [{
        model: models.User,
        where: {
          username: req.params.username,
        },
      }]
	})
	.then((postInfo) => {
      postInfo.update({
        title: req.body.title.toLowerCase(),
      	slug: getSlug(req.body.title.toLowerCase()),
      	body: req.body.body
      })
    })
})

// deletes a post
router.delete('/:username/:slug', (req, res) => {
	models.Post.destroy({
      where: {
        slug: req.params.slug,
      },
      include: [{
        model: models.User,
        where: {
          username: req.params.username,
        },
      }],
    })
    .then((id) => {
      res.send('Successufully deleted!')
    })
})

module.exports = router
const express = require('express')
const models = require('../models')
const router = express.Router()
const User = require('../models/user')
const getSlug = require('speakingurl')
const Redirect = require('../middlewares/redirect')

// ADDING LIBRARIES FOR IMAGE 
const fs = require('fs');
const path = require('path');
const multer = require('multer')

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
}) 

const upload = multer({ storage })

// add picture to post
router.put('/:id/picture', 
  upload.single('post-img'), 
  (req, res) => {
    // file passed from client
    const file = req.file;
    console.log('file in post controllers:', file)
    console.log('body in post controllers:', req.body)
    console.log('id in post controllers:', req.params.id)
    // meta all other values passed from the client
    const meta = req.body;
    models.Post.findOne({
      where: {id: req.params.id}
    })
    .then((post) => {
      post.update({
        image: file.path
      })
    })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while updating a Post', err)
      res.sendStatus(400)
    })
})

// creates a post 
router.post('/new-post', (req, res) => {
  models.Post.create({
    bookTitle: req.body.bookTitle,
    bookAuthor: req.body.bookAuthor,
    userName: req.body.userName,
    condition: req.body.condition,
    isbn: req.body.isbn,
    format: req.body.format,
    deparment: req.body.deparment,
    course: req.body.course,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    UserId: req.body.UserId
  })
  .then((post) => {
    res.json(post)
  })
  .catch((err) => {
    console.log('ERROR while creating a new Post', err)
    res.sendStatus(400);
  })
})



// get all posts: http://localhost:8000/api/post
router.get('/', (req, res) => {
  models.Post.findAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll Post', err)
      res.redirect('/error')
    })
})



// get all posts: where UserId = UserId
// http://localhost:8000/api/post/:userId
// router.get('/id', (req,res) => {
//   models.Post.findAll({
//     where: {
//       id: req.params.id,
//     }
//   })
//   .then((data) => {
//     res.json(data)
//   })
//   .catch((err) => {
//     console.log('ERROR while getting findAll Post', err)
//     res.redirect('/error')
//   })
// })





// get a book by the title: http://localhost:8000/api/post/:bookTitle
router.get('/:bookTitle', (req,res) => {
  models.Post.findAll({
    where: {
      bookTitle: req.params.bookTitle,
    }
  })
  .then((department) => {
      res.json(department);
    })
    .catch(() => {
      res.sendStatus(400);
    })
})



// get a book Post by id: http://localhost:8000/api/post/postInfo/:id
router.get('/postInfo/:id', (req,res) => {
  models.Post.findOne({
    where: {
      id: req.params.id,
    }
  })
  .then((department) => {
      res.json(department);
    })
    .catch(() => {
      res.sendStatus(400);
    })
})


// updates a post: http://localhost:8000/api/post/Luis123/Dark Matters
router.put('/:userName/:bookTitle', (req, res) => {
	models.Post.findOne({
		where: {
      bookTitle: req.params.bookTitle,
      userName: req.params.userName
    }
	})
	.then((postInfo) => {
      postInfo.update({
        bookTitle: req.body.bookTitle,
        userName: req.body.userName,
        condition: req.body.condition,
        format: req.body.format,
        deparment: req.body.deparment,
        course: req.body.course,
        price: req.body.price,
        UserId: req.body.UserId
      })
    })
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log('ERROR while updating a Post', err)
      res.sendStatus(400);
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
      res.json('Successufully deleted!')
    })
})

// postTitle is a key I defined to access the req.
router.get('/search/:postTitle',(req,res)=>{
  models.Post.findAll({
    where: {
      bookTitle: {
        $ilike: '%' + req.params.postTitle + '%'
    }
    }
  })
  .then((data)=>res.send(data))
})







module.exports = router
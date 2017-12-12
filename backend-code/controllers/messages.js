const express = require('express');
const models = require('../models');
const router = express.Router();

// gets all Messages: http://localhost:8000/api/messages
router.get('/', (req, res) => {
  models.Messages.findAll()
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => {
      console.log('Failure GET to '/' route (displaying all messages');
      res.redirect('/error');
    })
});

// makes a Message
router.post('/', (req, res) => {
  models.Messages.create({
    fromUserName: req.body.fromUserName,
    toWhomUserId: req.body.toWhomUserId,
    message: req.body.message,
  	UserId: req.body.UserId,
  })
  .then((message) => {
    res.json(message);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});


// get Messages by fromUserName: http://localhost:8000/api/messages/:userId
router.get('/:fromUserName', (req,res) => {
  models.Messages.findAll({
    where: {
      fromUserName: req.params.fromUserName,
    }
  })
  .then((messages) => {
      res.json(messages);
    })
    .catch(() => {
      res.sendStatus(400);
    })
})

// // gets a book
// router.get('/:userName', (req, res) => {
//   models.Messages.findById(parseInt(req.params.id))
//   .then((book) => {
// 	    res.json(book);
// 	  })
// 	  .catch(() => {
// 	    res.sendStatus(400);
// 	  })
// });






// // updates a book
// router.put('/:id', (req, res) => {
// 	models.Books.findById(parseInt(req.params.id))
// 	.then(book => {
// 		book.update({
// 			title: req.body.title,
//       author: req.body.author,
//       year: req.body.year,
//       edition: req.body.edition,
//       format: req.body.format
// 		});
// 		res.sendStatus(200);
// 	})
// 	.catch(() => {
//     console.log('error here')
//     res.sendStatus(400);
//   });
// });

// // removes a book
// router.delete('/:id', (req, res) => {
//   models.Books.findById(parseInt(req.params.id))
//     .then(book => { 
//       book.destroy();
//       res.sendStatus(200);
//     })
//     .catch(() => {
//       res.sendStatus(400);
//     });
// });

module.exports = router;



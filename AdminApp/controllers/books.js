const express = require('express');
const models = require('../models');
const router = express.Router();

// gets all Books
router.get('/', (req, res) => {
  models.Books.findAll()
    .then((allBooks) => {
      res.json(allBooks);
    })
    .catch((err) => {
      console.log('Failure GET to '/' route (displaying all books');
      res.redirect('/error');
    })
});

// makes a Book
router.post('/', (req, res) => {
  models.Books.create({
    title: req.body.title,
  	author: req.body.author,
  	year: req.body.year,
  	edition: req.body.edition,
  	format: req.body.format
  })
  .then((books) => {
    res.json(books);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

// gets a book
router.get('/:id', (req, res) => {
  models.Books.findById(parseInt(req.params.id))
  .then((book) => {
	    res.json(book);
	  })
	  .catch(() => {
	    res.sendStatus(400);
	  })
});

// updates a book
router.put('/:id', (req, res) => {
	models.Books.findById(parseInt(req.params.id))
	.then(book => {
		book.update({
			title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      edition: req.body.edition,
      format: req.body.format
		});
		res.sendStatus(200);
	})
	.catch(() => {
    console.log('error here')
    res.sendStatus(400);
  });
});

// removes a book
router.delete('/:id', (req, res) => {
  models.Books.findById(parseInt(req.params.id))
    .then(book => { 
      book.destroy();
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

module.exports = router;



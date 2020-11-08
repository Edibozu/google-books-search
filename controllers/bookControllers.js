const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
  db.Books.find({})
    .then((allBooks) => {
      console.log(allBooks);
      res.json(allBooks);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

router.post("/api/books", (req, res) => {
  db.Books.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  })
    .then((savedBook) => {
      console.log(savedBook);
      res.json(savedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

router.delete("/api/books/:id", (req, res) => {
  db.Books.findByIdAndDelete(req.params.id)
    .then((deleteBook) => {
      console.log(deleteBook);
      res.json(deleteBook);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});



module.exports = router;
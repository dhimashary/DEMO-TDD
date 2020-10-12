const { Book } = require('../models')

class BookController {
  static create(req, res, next) {
    console.log(req.body, '<--------------')
    Book.create({
      title: req.body.title,
      img: req.body.img,
      stock: req.body.stock
    })
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = BookController
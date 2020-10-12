const express = require('express')
const app = express()
const BookController = require('./controllers/bookController')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.post('/books', BookController.create)
app.use(errorHandler)

module.exports = app
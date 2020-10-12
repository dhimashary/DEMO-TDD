const app = require('../app')
const request = require('supertest')
let tokenAdmin
let deletedBook
describe('Book Routes', () => {
  beforeAll((done) => {
    // User.create
    // tokenAdmin = jwt.sign({ id: user.id, email: user.email})
    // Book.create
    // deletedBook = book
  })
  describe('POST /books', () => {
    describe('Success POST', () => {
      test('Should return status 201 and book object', (done) => {
        request(app)
          .post('/books')
          .set('access_token', tokenAdmin)
          .send({
            title: 'Narnia',
            img: 'contoh.jpg',
            stock: 5
          })
          .expect(201)
          .end((err, response) => {
            if (err) {
              console.log(err)
              done(err)
            } else {
              expect(response.body).toHaveProperty('id')
              expect(response.body).toHaveProperty('title', 'Narnia')
              expect(response.body).toHaveProperty('img', 'contoh.jpg')
              expect(response.body).toHaveProperty('stock', 5)
              done()
            }
          })
      })
    })
    describe('Fail POST', () => {
      test('Should return status 400 and error object', (done) => [
        request(app)
          .post('/books')
          .send({
            title: 'Narnia',
            img: 'contoh.jpg',
            stock: -5
          })
          .expect(400)
          .end((err, response) => {
            if (err) {
              done(err)
            } else {
              expect(response.body).toHaveProperty('error_msg', 'Stock cannot be lower than 0')
              done()
            }
          })
      ])
    })
  })
  
  describe('GET /books', () => {
    
    describe('Success GET', () => {
      
    })
    describe('Fail GET', () => {

    })
  })

  describe('DELETE /books/:id', () => {
    
    describe('Success DELETE', () => {
      
    })
    describe('Fail DELETE', () => {

    })
  })
  
})


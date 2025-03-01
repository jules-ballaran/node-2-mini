const express = require('express')

const bc = require('./controllers/booksController.js')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/../build`))

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:bookId', bc.update)
app.delete('/api/books/:bookId', bc.delete)

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
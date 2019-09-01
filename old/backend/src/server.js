const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://catupiry:catupiry@cluster0-xdsqg.mongodb.net/rocketseat?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(3333)

// M - Model, V - View, C - Controller
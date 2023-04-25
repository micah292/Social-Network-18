const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers', {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))

db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./router/subscribers')

app.use('/subscribers', subscribersRouter)


app.listen(3001, () => console.log('Server Running'))
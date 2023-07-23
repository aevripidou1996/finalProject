const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

// connect our db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)


// start server
app.listen(process.env.PORT, () => console.log('server has been started successfully'))

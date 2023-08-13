require('dotenv').config( )

const express = require('express')
const app = express()
const port = 4000; 
const mongoose = require('mongoose')
const useRoute = require('./src/Routes/user')

app.use("/user", useRoute)

mongoose.connect(process.env.CONNECTION_STRING)

const db = mongoose.connection

db.on('error', (err)=> console.error(err))
db.once('open', ()=> console.log('Connected to Database'))
 


app.listen(port, ()=> {
    console.log(`app running on port ${port}`)
})
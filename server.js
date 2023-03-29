require('dotenv').config()
const express = require('express')

const app = express()
const PORT = 8004

const connectDB = require('./config/db')

connectDB()

const flightsRoutes = require('./routes/flightsRoutes.js')

const { createEngine } = require('jsx-view-engine')

const methodOverride = require('method-override')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.use(express.static('public'))

// app.use((req,res,next)=> {
//     console.log('inside middleware')
//     console.log(`${req.method} ${req.path}`)     
//     next()
// })

// app.use('/', require('./routes/index'))
app.use('/flight', flightsRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})
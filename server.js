const express= require('express')
const connectDB= require('./config/connectDB')

const app= express()
//connect to data base

connectDB()

// middelware
app.use(express.json())


//test
app.use('/api/users', require('./routes/User'));


//run server
const port= process.env.PORT || 5000
app.listen(port, err=> 
    err? console.log('error') : console.log(`server is connected at ${port}`)
    )
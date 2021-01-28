// connect DB
const mongoose=require('mongoose')
const config = require('config');

const connectDB =()=>{
mongoose.connect(config.get("MONGO_URI"), { useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=>console.log('server is connected to BD'))
.catch((err)=>console.log(err))
}

module.exports= connectDB
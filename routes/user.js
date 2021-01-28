const express= require('express')
const router= express.Router()
const User= require("../models/User")

//add user
router.post('/addUser', (req, res)=>{
    const {name, email, phone}= req.body
    const newUser= new User({
        name, phone, email
    })
    newUser.save()
    .then(users=>res.send(users))
    .catch((err)=>console.log(err))

})

//get all users
router.get('/all', (req, res)=>{
    User.find()
    .then(users=>res.send(users))
    .catch((err)=>console.log(err))
})

//delete user
router.delete("/deleteUser/:_id",(req,res)=>{
    const {_id}= req.params
    User.findOneAndDelete({_id})
    .then(users=>res.send(users))
    .catch((err)=>console.log(err))

})

//get user by id

router.get('/:_id',(req, res)=>{
    const {_id}=req.params
    User.findOne({_id})
    .then(users=>res.send(users))
    .catch((err)=>console.log(err))
})

//edit user
router.put('/editUser/:_id', (req, res)=>{
    const {_id}=req.params
    const{name, email, phone}= req.body
    User.findOneAndUpdate({_id}, {$set:{name, email, phone}})
    .then(users=>res.send(users))
    .catch((err)=>console.log(err))

})
module.exports= router
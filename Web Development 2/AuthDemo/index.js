const express = require('express')
const User = require('./models/user')
const app= express()
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views','views')

mongoose.connect('mongodb://localhost:27017/AuthDemo',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.on("error", console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log("Database connected")
})

app.get('/register',(req,res)=>{
    res.render('register');
})
app.post('register',async(req,res)=>{

})
app.get('/secret',(req,res)=>{
    res.send('This is a secret, cannot see without logging in')
})

app.listen(3000,()=>{
    console.log('Listening on Port 3000')
})
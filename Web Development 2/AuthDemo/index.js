const express = require('express')
const User = require('./models/user')
const app= express()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const session = require('express-session')

app.use(express.urlencoded({ extended: true }));
app.use(session({secret:'notagoodsecret'}))
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


const requirelogin = (req,res,next)=>{
    if (!req.session.user_id){
        return res.redirect('/login')
    }
    next()
}
app.get('/',(req,res)=>{
    res.send('Home Page')
})
app.get('/register',(req,res)=>{
    res.render('register');
})
app.post('/register',async(req,res)=>{
    const{password,username}=req.body
    const user = new User({username,password})
    await user.save()
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const foundUser = await User.findAndValidate(username,password)
    if(foundUser){
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }
    else{
        res.redirect('/login')
    }
})

app.post('/logout',(req,res)=>{
    // req.session.user_id = null;
    req.session.destroy()
    res.redirect('/login')
})
app.get('/secret',requirelogin,(req,res)=>{
    res.render('secret')
})
app.get('/topsecret',requirelogin,(req,res)=>{
    res.send('Top Secret')
})
app.listen(3000,()=>{
    console.log('Listening on Port 3000')
})
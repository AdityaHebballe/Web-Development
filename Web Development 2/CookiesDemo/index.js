const express = require('express')
const cookieParser=require('cookie-parser')
const app = express()
app.use(cookieParser('thisismysecret'))

app.get('/greet',(req,res)=>{
    const {name = 'No name'} =req.cookies;
    res.send(`Hi ${name}`)
})

app.get('/setname',(req,res)=>{
    res.cookie('name','aditya')
    res.cookie('species','mammal')
    res.send('OK sent a cookie')
})

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','ewwwww',{signed:true})
    res.send("SENT")
})

app.get('/verifyfruit',(req,res)=>{
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})
app.listen('3000',()=>{
    console.log('Localhost 3000 serving')
})
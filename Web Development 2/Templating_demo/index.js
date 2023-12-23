const express = require('express')
const app = express()
const redditdata = require('./data.json')
const path= require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.get('/cats',(req,res)=>{
    const cats=['Fuck','Bluie','asud']
    res.render("cats",{allcats:cats})
})
app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/rand',(req,res)=>{
    const number = Math.floor(Math.random()*10)+1
    res.render('random',{rand:number})
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    const data = redditdata[subreddit]
    if(data){
    res.render('subreddit',{...data})
    }
    else{
        res.render('notfound',{subreddit})
    }
})
app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
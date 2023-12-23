const express = require("express")
const app = express()
// console.dir(app)
// app.use((req,res)=>{
//     console.log("We got a new request")
//     // res.send("Hello,we got a your request")
//     res.send('<h1>This is my webpage<h1>')
// })
// /cats="meow"
// /dogs="woof"


app.post('/cat',(req,res)=>{
    res.send("Meow!")
})
app.get('/',(req,res)=>{
    res.send("This is the homepage!")
})
app.get('/dog',(req,res)=>{
    res.send("Woof!")
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
app.get('/search',(req,res)=>{
    const {q} = req.query
    res.send(`<h1>User searched for the query ${q}`)
})
app.get('/r/:subreddit/:postID',(req,res)=>{
    const {subreddit,postID}=req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit and comment ${postID}</h1>`)
})

app.get('*',(req,res)=>{
    res.send("IDk bruh")
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})
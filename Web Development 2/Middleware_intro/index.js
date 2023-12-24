
const express = require('express');
const app = express();
const morgan  = require('morgan');

morgan('tiny')
app.use((req,res,next)=>{
    req.requestTime = Date.now()
    console.log(req.method,req.path)
    next();
})
app.use('/dogs',(req,res,next)=>{
    console.log("I love dogs")
    next()
})

app.use((req,res,next)=>{
    console.log(req.query)
    next()
})
// app.use((req,res,next)=>{
//     console.log("This is my first middleware")
//     return next()
//     console.log('This is after next of first middleware')
// })
// app.use((req,res,next)=>{
//     console.log("This is my second middleware")
//     next()
// })
app.get('/',(req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Home page!')
})
app.get('/dogs',(req,res)=> {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF')
})

app.use((req,res)=>{
    res.status(404).send('NOT FOUND')
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})
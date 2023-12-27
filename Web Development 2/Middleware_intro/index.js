
const express = require('express');
const app = express();
const morgan  = require('morgan');
const AppError = require('./AppError')

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

const verifypassword =(req,res,next)=>{
    const {password} = req.query;
    if(password==='chickennugget'){
        next()
    }
    throw new AppError('Password required',401)
    // res.send('SORRY YOU NEED A PASSWORD')
    // res.status(401)
    // throw new Error('Wrong Password')
}
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

app.get('/error',(req,res)=>{
    chicken.fly()
})
app.get('/dogs',(req,res)=> {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF')
})
app.get('/secret',verifypassword,(req,res)=> {
    res.send('I love casdasdasd')
})
app.get('/admin',(req,res)=> {
    throw new AppError('You are not an admin',403)
})
app.use((req,res)=>{
    res.status(404).send('NOT FOUND')
})

// app.use((err,req,res,next)=>{
//     console.log("*********************")
//     console.log("********ERROR********")
//     console.log("*********************")   
//     console.log(err)
//     next(err)
// })
app.use((err,req,res,next)=>{
    const {status=500, message= "Something gone"} = err;
    res.status(status).send(message)

})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})
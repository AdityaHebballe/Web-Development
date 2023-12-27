const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError = require('./AppError')
app.use(methodOverride('_method'))

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR!!!!")
        console.log(err)
    })

app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products',async(req,res)=>{
    const {category} = req.query
    if(category){
        const products = await Product.find({category})
        res.render('products/index',{products,category})

    }else{
        const products = await Product.find({})
        res.render('products/index',{products, category:'All'})
    }
})
app.get('/products/new',(req,res)=>{
    res.render('products/new', {categories})
})
app.post('/products',async(req,res,next)=>{
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        console.log(newProduct)
        res.redirect(`/products/${newProduct._id}`)
    }
    catch(e){
        next(e)
    }
})

function wrapAsync(fn){
    return function (req,res,next){
        fn(req,res,next).catch(e=>next(e))
    }
}

app.get('/products/:id',wrapAsync(async(req,res,next)=>{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            throw next(new AppError('Product not found',404))
        }
        res.render('products/show',{product})

}))

app.put('/products/:id',async(req,res,next)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body,{runValidators:true, new:true})
        res.redirect(`/products/${product._id}`)
    }
    catch(e){
        next(e)
    }
})

app.delete('/products/:id', async(req,res)=>{
    const {id} = req.params
    const deletedProduct =await Product.findByIdAndDelete(id)
    res.redirect('/products')
})
app.get('/products/:id/edit', async(req,res,next)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        if(!product){
            throw next(new AppError('Product not found',404))
        }
        res.render('products/edit',{product,categories})
    }
    catch(e){
        next(e)
    }
})
app.use((err,req,res,next)=>{
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message)
})
app.listen(3000,()=>{
    console.log("Listening on 3000")
})
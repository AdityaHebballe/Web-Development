const express = require('express')
const app = express()
const path = require('path')
const mongoose  = require('mongoose')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const mongoSanitize = require('express-mongo-sanitize');
const helmet  = require('helmet')
require('dotenv').config()
const dbUrl = 'mongodb://localhost:27017/yelp-camp'

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}



const ExpressError = require('./utils/ExpressError')
const reviewRoutes = require('./routes/reviews.js')
const campgroundRoutes= require('./routes/campground.js')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user.js')
const userRouters = require('./routes/users.js')
const session = require('express-session')
const MongoStore = require('connect-mongo');
//Mongoose Connection
// 'mongodb://localhost:27017/yelp-camp'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.on("error", console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log("Database connected")
})

//Express misc
app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))
app.use(mongoSanitize())

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'thisshouldbeabettersecret!'
    }
});

store.on("error",function(e){
    console.log("SESSION STORE ERROR",e)
})
const sessionConfig = {
    store,
    name:"session",
    secret: 'thisshouldbeabettersecret!',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        // secure:true,
        expires:Date.now() + 1000 * 60 * 60 * 24 *7,
        maxAge: 1000 * 60 * 60 * 24 *7
    }
}

app.use(session(sessionConfig));
app.use(flash());
app.use(helmet({contentSecurityPolicy:false}));


const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://code.jquery.com/"
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net"
];
const connectSrcUrls = [
    "https://api.mapbox.com/",
    "https://a.tiles.mapbox.com/",
    "https://b.tiles.mapbox.com/",
    "https://events.mapbox.com/",
];
const fontSrcUrls = [];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/dzocqg5rp/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT! 
                "https://images.unsplash.com/",
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);

// Passport Initialization
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//Misc Routes
app.use((req,res,next)=>{
    res.locals.currentUser = req.user
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

app.get('/fakeuser',async(req,res)=>{
    const user = new User({email:'adityaaa@getMaxListeners.com',username:'AAditya'})
    const newUser = await User.register(user,'chicken')
    res.send(newUser)
})

app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/reviews',reviewRoutes)
app.use('/',userRouters)


app.get('/',(req,res)=>{
    res.render('home')
})


app.all('*',(req,res,next)=>{
    next(new ExpressError('Page Not Found',404))
})
app.use((err,req,res,next)=>{
    const {statusCode =404} = err
    if(!err.message) err.message = 'Oh shit smtg wrong'
    res.status(statusCode).render('error',{err})
})

app.listen(3000,()=>{
    console.log("PORT 3000 OPEN")
})
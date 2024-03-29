const mongoose  = require('mongoose')
const {Schema} = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const userSchema = new Schema({
    username:String,
    age:Number
})
const tweetSchema = new Schema({
    text:String,
    likes:Number,
    user: {type: Schema.Types.ObjectId, ref:'User'}
})
const User= mongoose.model('User',userSchema)
const Tweet =mongoose.model('Tweet',tweetSchema)

const makeTweets = async()=>{
    // const user = new User({username:'noob123',age:61})
    const user = await User.findOne({username:'noob123'})
    const tweet2 =new Tweet({text:'bock bock bock',likes: 123400})
    tweet2.user = user;
    user.save()
    tweet2.save()
}
makeTweets()

const findTweet = async () =>{
    const t = await Tweet.findOne({}).populate('user','username')
    console.log(t)
}
findTweet()
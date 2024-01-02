const mongoose  = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    address:[
        {
            _id: {_id:false},
            street:String,
            city:String,
            state:String,
            country: String
        }
    ]
})

const User = mongoose.model('User',userSchema)
const makeUser = async()=>{
    const u = new User({
        first:'Hairy',
        last:'Potter'
    })
    u.address.push({
        street: '123 Sesame',
        city:'New York',
        state:'NY',
        country:'USA'
    })
    const res = await u.save()
    console.log(res)
} 

const addAddress = async(id) => {
    const user = await User.findById(id)
    user.address.push(
        {
            street: '123 Sesame',
            city:'New York',
            state:'NY',
            country:'USA'
        }
    )
    const res = await user.save()
    console.log(user)
}

makeUser()
addAddress('658d5977706ff3e690960517')
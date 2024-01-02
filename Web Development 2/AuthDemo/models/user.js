const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username Cannot be Blank']
    },
    username:{
        type:String,
        required:[true,'Username Cannot be Blank']
    }
})

module.exports = mongoose.model('User',userSchema)
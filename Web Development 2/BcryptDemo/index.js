const bcrypt = require('bcrypt')

// const hashPassword = async(pw) =>{
//     const salt = await bcrypt.genSalt(12)
//     const hash = await bcrypt.hash(pw,salt)
//     console.log(hash)
// }

const hashPassword = async(pw) =>{
    const hash = await bcrypt.hash(pw,12)
    console.log(hash)
}

const login = async(pw,hashedPw)=>{
    const result =await bcrypt.compare(pw,hashedPw)
    if(result){
        console.log("Logged You in Successfully")
    }
    else{
        console.log('Try Again')
    }
}
// hashPassword('monkey')
login('monkey','$2b$12$ZFyzP3z8kSpNGTrioILbheMMc4VNAF3yCH1MJVjvHv0SKXuPtPC4O')
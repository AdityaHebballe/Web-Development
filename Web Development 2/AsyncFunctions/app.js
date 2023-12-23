// async function hello(){
// }

// const sing = async () => {
//     throw new Error("Fuuuuuuuuuuuck")
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data)=>{
//         console.log("PROMISE RESOLVED WITH:", data)
//     })
//     .catch((err)=>{
//         console.log("ERORRRRRRR")
//         console.log(err)
//      })

const login = async (username, password)=>{
    if(!username || !password) throw 'Missing Credentials'
    if (username&&password === 'corgi'){
        return 'Login successful'
    }
}
login('corgi','corgi')
    .then(msg =>{
        console.log("PROMISE RESOLVED WITH:", msg)
    })
    .catch(err=>{
        console.log("ERORRRRRRRRR")
        console.log(err)
    }) 
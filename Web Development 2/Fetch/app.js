// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("Resolved",res)
//     return res.json()
// })
// .then((data)=> {
//     console.log(data)
//     return fetch("https://swapi.dev/api/people/2/")
// })
// .then((res =>{
//     console.log("Second resolved")
//     return res.json()
// }))
// .then((data)=>{
// console.log(data)
// })
// .catch((e) => {
//     console.log("error",e)
// })

const loadStarWarsPpl = async(id) => {
    try{
        const res = await fetch(`https://swapi.dev/api/people/${id}/`)
        const data = await res.json()
        console.log(data)
    }
    catch(e){
        console.log("ERROR!",e)
    }
}
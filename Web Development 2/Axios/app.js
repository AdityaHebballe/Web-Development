// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("response",res);
// })
// .catch((err)=>{
//     console.log("error",err);
// });

const getStarWarsPpl = async(id)=>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}
getStarWarsPpl(5);
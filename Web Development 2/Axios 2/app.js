const butt = document.querySelector('#joke')
const list = document.querySelector('#jokelist')
const addNewJoke = async() => {
    const jokeText = await getDadJoke()
    const newLi= document.createElement('li')
    newLi.append(jokeText)
    list.append(newLi)

}

const getDadJoke = async() => {
    try{
        const config = {headers:{Accept:'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com",config)
        return res.data.joke
    }
    catch(e){
        return "NO JOKES AVAILABLE"
    }
}

butt.addEventListener('click',addNewJoke)
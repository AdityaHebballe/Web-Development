const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault()
    let id = form.elements.query.value
    const config = {params: {q:id}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    addImage(res.data)
    form.elements.query.value = ""
})

const addImage = (shows)=>{
    for(let result of shows){
        if(result.show.image)
        {
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
}}
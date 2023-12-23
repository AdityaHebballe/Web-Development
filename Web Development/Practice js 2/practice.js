const form = document.querySelector('#shelterform')
const input = document.querySelector("#catname")
const list = document.querySelector("#list")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const catname = input.value
    const newLi = document.createElement("li")
    newLi.innerText = catname
    console.log(newLi)
    list.append(newLi)
    input.value = ''
})
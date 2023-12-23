const button = document.querySelector("button")
const h1 = document.querySelector("h1")


const color = () =>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const newcolor=`rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newcolor
    h1.textContent  = newcolor
}
button.addEventListener("click",color)

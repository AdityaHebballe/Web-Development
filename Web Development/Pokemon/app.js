// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container  = document.querySelector('#container');
const newImg = document.createElement('img');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i= 1; i<=151;i++){
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const newImg = document.createElement('img')
    const span = document.createElement('span')
    span.innerText= `#${i}`
    newImg.src = `${baseUrl}${i}.png`
    pokemon.append(newImg)
    pokemon.append(span)
    container.append(pokemon)
}
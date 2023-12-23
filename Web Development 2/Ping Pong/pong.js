let players = 5
for(let i=0;i<=players;i++){
    eval("p"+ i + "=" + "{}");
}

function dicmaker(){
    let p = {
        score: 0,
        button: document.querySelector("#p`${i}`button"),
        display: document.querySelector("#p`${i}`Display"),
        }
}


const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2Display")
}
const p3= {
    score: 0,
    button: document.querySelector("#p3button"),
    display: document.querySelector("#p3Display")
}

const reset = document.querySelector('#reset')
const option = document.querySelector('#playto')
let winningScore = 3
let isGameOver = false

function updateScores(player,...opponent){
    if (!isGameOver){
        player.score+=1
        if (winningScore === player.score){
            player.display.classList.add('has-text-success')
            for(let o of opponent){ 
                o.display.classList.add('has-text-danger')
                o.button.disabled = true
            }
            player.button.disabled = true
            isGameOver = true
        }
        player.display.textContent = player.score
    }

}
function assigner(p){
    for(let p= 0;p<=0)

}
p1.button.addEventListener('click',function(){
    updateScores(p1,p2,p3)})

p2.button.addEventListener('click',function(){
    updateScores(p2,p1,p3)})

p3.button.addEventListener('click',function(){
    updateScores(p3,p1,p2)})


const resetFunc = function(){
    isGameOver = false
    for(let p of [p1,p2,p3]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success','has-text-danger')
        p.button.disabled = false

    }
}

reset.addEventListener('click',resetFunc)
option.addEventListener('change',function(){
    winningScore = parseInt(this.value)
    resetFunc()
})
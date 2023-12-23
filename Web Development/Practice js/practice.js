// const add = (a,b) => a+b

// const prices = [1,2,3,4,45,3,0.11,8]

// const minprice= prices.reduce((min,price)=> {
//     if(price<min){
//         return price
//     }
//     else{
//         return min
//     }
// })

// function sum (...nums){
//     return nums.reduce((total,current)=> total+current)
// }

document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(evt){
//     console.log(evt.code)
//     console.log(evt.key)
// })
// input.addEventListener('keyup', function(){
//     console.log("Key Up")
// })
window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log('UP')
            break
        case 'ArrowDown':
            console.log("Down!")
            break 
        default:
            console.log("Ignored")
    }
})
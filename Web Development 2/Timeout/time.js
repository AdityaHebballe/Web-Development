// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'yellow'
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'green'
//             },1000)
//         },1000)
// },1000)
// console.log('connected')

// const delayedColorChange = (newcolor,delay, doNext)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newcolor
//         doNext && doNext()
//         },delay)

// }

// delayedColorChange('olive',1000,()=>{
//     delayedColorChange('teal',1000,()=>{
//         delayedColorChange('red',1000,()=>{
//             delayedColorChange('blue',1000,()=>{
//                 delayedColorChange('purple',1000)
//             })
//         })
//     })
// })

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        },delay)
    })
}

delayedColorChange('olive',1000)
    .then(()=>delayedColorChange('red',1000))
    .then(()=>delayedColorChange('orange',1000)
    .then(()=>delayedColorChange('violet',1000)))
    .then(()=>delayedColorChange('blue',1000))
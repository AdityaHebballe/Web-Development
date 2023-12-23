const form = document.querySelector('#tweetForm')
const list = document.querySelector('#tweeter')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const Li = document.createElement('li')
    const b = document.createElement('b')
    b.append(this.elements.username.value)
    Li.append(b)
    Li.append(`- ${this.elements.password.value}`)
    list.append(Li)
    tweet.value = ''
})
list.addEventListener('click',function(e){
    e.target.remove()
})

let input= prompt("watcha wanna do")
const todos = ["collect shit","skdncjnsdc","sjnvjkndjkc"]

while(input!=="quit" && input!=="q"){

    if(input==='list'){

        for(let i=0; i<todos.length;i++){

            console.log(`${i}:${todos[i]}`)
        }
    }
    else if(input==='new'){
        const newTodo = prompt("Ok, what's new")
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`)
    }
    else if(input==="delete"){
        const index = parseInt(prompt("Ok,Enter the index to remove"))
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index,1)
        console.log(`Ok deleted ${deleted}`)
        }
        else{
            console.log("invalid")
        }

    }


    input = prompt("watcha wanna do")
}
console.log("Fine go")


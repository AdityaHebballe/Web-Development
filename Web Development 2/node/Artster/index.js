const figlet =  require("figlet")

figlet('Hello wold!!', function (err,data){
    if(err){
        console.log("something went wrong ")
        console.dir(err)
        return;
    }
    console.log(data)
})
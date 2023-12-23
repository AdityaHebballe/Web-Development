let maximum = parseInt(prompt("enter maximum number"));
while(!maximum){
    maximum = parseInt(prompt("enter a valid number"));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;

let guess = prompt("enter a guess");
let attempts = 1;

while (parseInt(guess) !==targetNum){
    if(guess === "q") break;
    guess = parseInt(guess)
    if(guess>targetNum){
        guess = prompt("Too high enter a new number ");
        attempts++;
    }
    else if(guess<targetNum){
        guess = prompt("Too low! Enter a new guess");
        attempts++;
    }
    else{
        guess = prompt("INvalid guess. Enter a valid number")
    }
}
if(guess === 'q'){
    console.log("you quiting bish")
}
console.log(`You got it ${attempts}`)

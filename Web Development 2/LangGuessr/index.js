const franc = require("franc")
const langs = require("langs")
const 
const input = process.argv[2]
const langCode = franc(input)
if(langCode==='und'){
    console.log("Couldnt figure it out")
}
else{
    const language = langs.where("3",langCode)
    console.log(`Our best guess is ${language.name}`)
}
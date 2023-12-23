const fs = require('fs');
const folderName = process.argv[2] || 'Project'
for(let i=0;i<3; i++){
    console.log(process.argv[i])
}
console.log(process.argv[0])
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK")
//     if (err) throw err;
//   });

try{
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/style.js`)
}
catch(e){
    console.log("Something went wrong")
    console.log(e)
}

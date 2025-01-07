const fs=require('fs')
const content="HELLO";
fs.writeFile('two.txt',content,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File updated successfully")
})
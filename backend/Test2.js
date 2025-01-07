const fs=require('fs');
console.log("This is my 1st console statement");//1 console

const result=fs.readFileSync('three.txt','utf-8');
console.log(result);//2 console

console.log("this is my 3rd console statement");
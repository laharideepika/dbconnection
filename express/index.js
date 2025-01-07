const express=require('express')
const app=express();

const PORT=8888;

app.get("/get",(request,response)=>{
    response.send("welcome to get meethod in express js")
})
app.get("/get1",(request,response)=>{
    response.send("welcome to get1 method in express js")
})
app.listen(PORT,()=>{
    console.log("my server is running on ${PORT} number")
})
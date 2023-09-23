const express = require("express")
const path = require('path')
const app = express()
const port = process.env.PORT || 8000

const static_path =path.join(__dirname,"../public")
app.use(express.static(static_path))

//routing
app.get("/",(req,res)=>{
    res.send("welcome to home channel")
})

app.get("/about",(req,res)=>{
    res.send("welcome to about channel")
})

app.get("/weather",(req,res)=>{
    res.send("welcome to weather channel ")
})

app.get("/*",(req,res)=>{
    res.send("404 page error oopsssss ")
})





app.listen(port,()=>{
    console.log("server connected")
})
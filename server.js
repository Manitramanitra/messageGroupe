const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("bonjour tout le monde");
})

app.listen(5000,()=>{
    console.log("Server Started on Port 5000");
})
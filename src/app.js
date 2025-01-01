const express = require('express');

const app = express();

app.listen(7777,()=>{
    console.log("Server is listening on port 7777!");
});

app.get('/',(req,res)=>{
    res.send("Hello, Dashboard!");
});

app.get('/hello',(req,res)=>{
    res.send("Hello hello hello");
});

app.get('/test',(req,res)=>{
    res.send('Hello from /test');  
});
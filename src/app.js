const express = require('express');

const app = express();


app.get("/getUserData",(req,res)=>{
    //logic of DB call and get user data

    res.send("User data sent");
});

app.use("/",(err,req,res,next)=>{
    if(err){
        //Log the error
        
        res.status(500).send("Oops! Something went wrong!");
    }
})

app.listen(7777,()=>{
    console.log("Server is listening on port 7777!");
});


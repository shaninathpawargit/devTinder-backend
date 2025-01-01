const express = require('express');

const app = express();

const { adminAuth } = require("./middlewares/auth");
const { userAuth } = require("./middlewares/auth");
app.use('/admin',adminAuth);

app.get("/user",userAuth,(req,res)=>{
    res.send("User data sent");
});

app.get("/admin/getAllData",(req,res)=>{
    res.send("All data sent");
});

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a user");
});


app.listen(7777,()=>{
    console.log("Server is listening on port 7777!");
});


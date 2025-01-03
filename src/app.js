const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const app = express();

app.use(express.json());

app.post('/signup', async (req,res)=>{

    const user = new User(req.body);

    try {
        user.save();
        res.status(200).json({message: 'User registered successfully!'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

connectDB()
.then(()=>{
    console.log("Database connection established...");
    app.listen(7777,()=>{
        console.log("Server is listening on port 7777!");
    });
}).catch(err =>{
    console.error("Error connecting to database:", err);
});




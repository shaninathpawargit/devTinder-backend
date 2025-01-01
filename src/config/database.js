const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://shanipawar:WdRaRdzhG6nDai4d@pawarinfosystems.w3glo.mongodb.net/devTinder");
};


module.exports = connectDB;
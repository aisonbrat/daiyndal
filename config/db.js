const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

mongoose.connect('mongodb://127.0.0.1:27017/reg',{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true });
const dbb = mongoose.connection;

dbb.once('open',()=>{console.log("Connected");})

dbb.on("error",()=>{console.log("error in conection");})

// module.exports = connectDB;
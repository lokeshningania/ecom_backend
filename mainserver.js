const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");





dotenv.config();

mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true  ,useNewUrlParser: true} , () => {
    console.log("database connected")
})

const app = express();


app.listen(process.env.PORT , ()=> {
    console.log(`server is running on port ${process.env.PORT}`)
})

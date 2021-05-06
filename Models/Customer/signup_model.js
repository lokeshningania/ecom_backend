const mongoose = require('mongoose');


const signUpTemplate = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type: String ,
        required: true
    },
    email:{
        type: String ,
        required: true
    },
    phone:{
        type: String , 
        required: true
    },
    password:{
        type: String ,
        required: true
    },
    date:{
        type: Date ,
        default: Date.now
    }

})

module.exports = mongoose.model('personaldetail', signUpTemplate)
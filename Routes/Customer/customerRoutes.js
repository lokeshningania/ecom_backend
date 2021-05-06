const { response } = require('express');
const express = require('express');
const signUpUser = require('../../Models/Customer/signup_model')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const router = express.Router()



router.get('/',(request , response) => {
    response.send('Customer Route working')
})

router.post('/signup' , (request , response) => {
    
    signUpUser.findOne({email : request.body.email}).exec((err,user)=>{
        console.log(user);  
        if(user){
            response.send("User already exist")
        }
        
        else{
            const signedUpUser = new signUpUser({
                firstname: request.body.firstname ,
                lastname: request.body.lastname ,
                username: request.body.username,
                email: request.body.email ,
                phone: request.body.phone ,
                password: request.body.password
                 
            })

            bcrypt.hash(signedUpUser.password, saltRounds, (err, hash) => { 

                signedUpUser.password = hash;
                signedUpUser.save()
                .then(data => {
                    response.json(data)
                })
                .catch(error => {
                    response.json(error)
                })
        
              })

        }
       
    
    })

        
   
    

})

router.post('/login' , (request , response) => {
    
})

module.exports = router;
const express = require('express')
const router =  express.Router()

router.get('/' , (request , response) => {
    response.send("Admin Routes are working")
})

module.exports = router;
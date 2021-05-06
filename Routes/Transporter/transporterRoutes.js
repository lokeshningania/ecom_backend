
const express = require('express')
const router  = express.Router()

router.get('/' , (request,response) => {
    response.send("Transporter routes are working")
})

module.exports = router;
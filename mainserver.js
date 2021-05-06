const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors')
const bodyparser = require("body-parser")
const session = require('express-session')
const flash = require('connect-flash')

const CustomerUrl = require('./Routes/Customer/customerRoutes')
const SellerUrl = require('./Routes/Seller/sellerRoute')
const TransporterUrl = require('./Routes/Transporter/transporterRoutes')
const AdminUrl = require('./Routes/Admin/adminRoutes')






dotenv.config();

mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true  ,useNewUrlParser: true} , () => {
    console.log("database connected")
})

const app = express();
app.use(cors())

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({limit: '10mb'}));

app.use('/customer' , CustomerUrl)
app.use('/seller' , SellerUrl)
app.use('/admin' , AdminUrl)
app.use('/transporter ' , TransporterUrl)


app.listen(process.env.PORT , ()=> {
    console.log(`server is running on port ${process.env.PORT}`)
})

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config({path:'./.env'})

app.use(cors())

app.use(express.json());

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true
}).then(()=>{
    console.log("Connection established with DB")
}).catch((err)=>console.log(err));

app.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT}`);
})
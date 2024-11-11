const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("mongo connected");
    })
    .catch((error)=>{
        console.log('mongo is not connected',error);
        process.exit(1);
    })
    
}
module.exports = dbConnect;

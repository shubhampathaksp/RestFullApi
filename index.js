
const express = require('express');
const dbConnect = require("./config/dtabase");
require('dotenv').config();
const app = express();
const sampleRoutes = require('./routes/testRoutes');

app.get('/',(req,res)=>{
    res.send("welcome this page");
})
app.use(express.json());
app.use('/api/v1/',sampleRoutes);
const port = process.env.PORT || 5000 ;
app.listen(port,()=>{
    console.log(`App started succesfully port:${port}`);
})
dbConnect();
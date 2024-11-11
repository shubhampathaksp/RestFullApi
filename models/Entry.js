const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const entrySchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        default:uuidv4
    },
 FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Hobby:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Entry',entrySchema);
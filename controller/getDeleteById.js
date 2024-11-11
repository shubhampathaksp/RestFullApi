const Sample = require('../models/Entry');
const  users = require('../data/userdata.json');

exports.getDeleteById = (req, res)=>{
    const id = req.params.id;
    Sample.findByIdAndDelete(id)
    .then((sample)=>{
        if(!sample){
            res.status(404).json({
                success: false,
                message:"something went"
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:sample,
                message:"this file deleted"
            })
        }
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({
            success:false,
            data:null,
            message:"this file can't delete"
        })
    })
}
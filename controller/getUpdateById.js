const Sample = require('../models/Entry');
const  users = require('../data/userdata.json');

exports.getUpdateById = (req, res)=>{
    const id = req.params.id;
    const {FirstName,LastName,Hobby}= req.body;
    Sample.findByIdAndUpdate(id,{FirstName,LastName,Hobby})
    .then((sample)=>{
        if(!sample){
            res.status(400).json({
                success:false,
                message:"please enter the correct id"
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:sample,
                message:" Update successfully"
            })
        }
    })
    .catch((error)=>{
        console.log(error);
        res.status(404).json({
            success:false,
            data:null,
            message:" Update not successfully somthing is error"
        })
    })
}

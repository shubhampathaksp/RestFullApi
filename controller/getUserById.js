const Sample = require('../models/Entry');
const users = require('../data/userdata.json');

exports.getUserById = (req, res) => {
    const Id = req.params.id;
    Sample.findById(Id)
       .then((sample)=>{

        if(!sample){
            res.status(404).json({
                success:false,
                message:"User Not Found"
            });
        }
        else{
            res.status(200).json({
                sample:sample,
                success:true,
                message:"User is Already Exist"
            })
        }
       })
       .catch((error)=>{
        res.status(400).json({
            success:false,
            message: error.message
        })
       })   
}
  





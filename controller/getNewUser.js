const Sample = require('../models/Entry');


exports.getNewUser = (req, res)=>{
    const {FirstName,LastName,Hobby} = req.body;

    Sample.create({FirstName,LastName,Hobby})
    .then((sample)=>{
        res.status(200).json({
            success:true,
            data:sample,
            message:"Data Submitted Successfully"

        })
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({
            succsess:false,
            data:null,
            message:"Internal Server Error"
        })
    })
}

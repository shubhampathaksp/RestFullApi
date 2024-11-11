const Sample = require('../models/Entry');
const  users = require('../data/userdata.json');

// exports.seedDatabase = async () => {
//     try {
//         await Sample.deleteMany({});
//         await Sample.insertMany(users);
//         console.log('Database seede successfully');

//     } catch (error) {
//         console.log('Error seeding database:', error);
//     }
// };
exports.getAllUsers = async (req, res)=> {
    try{
        const item = await Sample.find({});
        return res.status(200).json({
             item: item,
            success: true,
            message:"Data successfully submitted"

        })
    }
    catch(error){
        return res.status(404).json({
            success: false,
            message: 'something went wrong',
            error:error
        });
    };
}

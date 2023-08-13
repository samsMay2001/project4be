const User = require('../models/userSchema')

module.exports = {
    get : async (req, res) => {
        try{
            const users = await User.find();
            res.json(users) 
        }catch(err){
            res.status(500).json({message: err})
        }
    }
}
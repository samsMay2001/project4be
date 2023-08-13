const User = require('../../models/userSchema')
const getUserfc = require('./getUser')
const createUserfc = require('./createuser')
module.exports = {
    get : async (req, res) => {
        try{
            const users = await User.find();
            res.json(users) 
        }catch(err){
            res.status(500).json({message: err})
        }
    },
    getUser : async (req, res) => {
        getUserfc(User, req, res)
    }, 
    create : async (req, res) => {
        createUserfc(User, req, res)
    }, 
    edit : async (req, res) => {
        // validate email and password 

        // return the user
    }, 
    delete : async (req, res) => {
        // validate email and password 

        // return the user
    }, 
    
}
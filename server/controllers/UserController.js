const { User } = require('../models')

class UserController {

    static register (req, res) {
        const {email, password} = req.body

        // User.create({email, password})
        //     .then(() => {
        //         res.status(201).json({message: "success register"})
        //     })
        //     .catch
        
    }

    static login (req, res) {
        
    }

}

module.exports = UserController
const { User } = require('../models')

class UserController {

    static register (req, res, next) {
        const {email, password} = req.body

        User.create({email, password})
            .then(() => {
                res.status(201).json({message: "success register"})
            })
            .catch((err) => {
                next({err})
            })
    }

    static login (req, res, next) {
        User
    }

}

module.exports = UserController
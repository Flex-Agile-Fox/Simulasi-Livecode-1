const jwt = require('jsonwebtoken')
const { Photo, User } = require('../models')

const loginAuthentication = (req, res, next) => {
    if (!req.headers.access_token) return next({name: 'MISSING_ACCESS_TOKEN'})

    try {
        const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET);
        req.UserId = decoded.id
      } catch(err) {
        return next({name: 'INVALID_ACCESS_TOKEN'})
    }

    User.findByPk(req.UserId)
        .then((user) => {
            if (!user) throw ({name: 'USER_NOT_FOUND'})
            next()
        })
        .catch((err) => {
            next(err)
        })
}

const authorization = (req, res, next) => {
    const { id } = req.params;
    
}

module.exports = { loginAuthentication, authorization }
const jwt = require('jsonwebtoken')
const { Photo, User } = require('../models')

const loginAuthentication = (req, res, next) => {
    if (!req.headers.access_token) return next({name: 'MISSING_ACCESS_TOKEN'})
    
}
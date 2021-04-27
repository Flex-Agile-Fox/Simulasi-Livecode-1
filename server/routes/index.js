const router = require('express').Router()
const userRoutes = require('./users')
const photoRoutes = require('./photos')
const loginAuthentication = require('../middlewares/auth')


router.use(loginAuthentication)
router.use('/users', userRoutes)
router.use('/photos', photoRoutes)

module.exports = router
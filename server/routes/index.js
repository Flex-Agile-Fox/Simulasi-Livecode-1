const router = require('express').Router()
const userRoutes = require('./users')
const photoRoutes = require('./photos')

router.use('/users', userRoutes)
router.use('/photos', photoRoutes)

module.exports = router
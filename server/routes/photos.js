const router = require('express').Router()
const photoController = require('../controllers/PhotoController')

router.post('/photos', photoController.display)

module.exports = router
const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const users = require('../controller/userController/userController')

router.get('/', users.get)
router.get('/getuser', users.getUser)
router.post('/createuser', users.create)

module.exports = router
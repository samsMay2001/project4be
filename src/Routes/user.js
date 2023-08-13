const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const users = require('../controller/userController')

router.get('/', users.get)

module.exports = router
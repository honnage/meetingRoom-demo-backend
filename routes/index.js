const express = require('express')
const router = express.Router()
const account = require('./account')

// Account route
router.use('/account', account);

module.exports = router;
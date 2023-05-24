const router = require('express').Router();
const { check } = require('express-validator');
const { onRegister } = require('../services/account')

// หน้าลงทะเบียน
router.post('/register', [
    check('u_username', 'Please input your ').not().isEmpty(),
    check('u_password').not().isEmpty(),
    check('u_firstname').not().isEmpty(),
    check('u_lastname').not().isEmpty()
], async (req, res) => {
    try {
        req.validate();
        res.json(await onRegister(req.body))
    }
    catch (ex) {
        console.log('error connent database fail')
        res.error(ex);
    }
});


router.post('/login', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty(),
], (req, res, next) => {
    try {
        req.validate()
        res.json({message: 'login page'})
    } catch (err) {
        res.error(err)
    }
})

module.exports = router;
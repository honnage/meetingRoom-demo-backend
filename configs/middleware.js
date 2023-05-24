const { validationResult } = require('express-validator');

module.exports = function (req, res, next) {

    req.validate = function () {
        // console.log('validate')

        const errors = validationResult(req).array();
        // console.log('errors', errors)
        // console.log('errors length', errors.length)

        if (errors.length == 0) return;
        throw new Error(`${errors[0].path} : ${errors[0].msg}`);
    };

    res.error = function (ex, status = 500) {
        res.status(status).json({ message: ex.message });
    };
    next()
}
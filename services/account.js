const connectionDB = require('../configs/mysql')
const { password_hash } = require('../configs/security')

module.exports = {
    onRegister(value) {
        return new Promise((resolve, reject) => {
            value.u_password = password_hash(value.u_password)
            connectionDB.query('INSERT INTO tb_users SET ?', value, (error, result) => {
                if (error) reject(error)

                resolve(result)
            })
        })
    }
}
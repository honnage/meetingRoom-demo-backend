import mysql  from 'mysql'

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'meeting_room_db',
    charset: 'utf8'
})

module.exports = connection
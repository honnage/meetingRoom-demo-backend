import express  from 'express'
import morgan  from 'morgan'
import cors  from 'cors'

const bodyParser = require('body-parser')
const expressSession = require('express-session')

const app = express()
const port = 3066

require('./database');

// const connect = require('./config/mysql')
// connect.query('show tables', (err, result) => {
//     console.log(result)
// })


// ตั้งค่า Session สำหรับ server
app.use(expressSession({
    secret: 'allfor1',
    resave: false,
    saveUninitialized: true,
    cookie: {  }
}))

// ตั้งค่า Parse ตัวแปรเมื่อ client ส่งข้อมูลเข้ามา
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/s', (req, res) => {
    req.session.item = "Hello world"
    res.end('set session')
})

app.get('*', (req, res) => {
    res.end(`<h1>backend server is start. session is ${req.session.item}</h1>`)
})

app.listen(port, () => console.log(`Server is start on port ${port}!`))
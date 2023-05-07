import express  from 'express'
import morgan  from 'morgan'
import cors  from 'cors'

const bodyParser = require('body-parser')
const expressSession = require('express-session')

const server = express()
const port = 3066

// ตั้งค่า Session สำหรับ server
server.use(expressSession({
    secret: 'allfor1',
    resave: false,
    saveUninitialized: true,
    cookie: {  }
}))

// ตั้งค่า Parse ตัวแปรเมื่อ client ส่งข้อมูลเข้ามา
server.use(morgan('dev'))
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/s', (req, res) => {
    req.session.item = "Hello world"
    res.end('set session')
})

server.get('*', (req, res) => {
    res.end(`<h1>backend server is start. session is ${req.session.item}</h1>`)
})

server.listen(port, () => console.log(`Server is start on port ${port}!`))
const express = require('express')
const app = express()
const expressSession = require('express-session')
const bodyParser = require('body-parser')
import morgan  from 'morgan'
import cors  from 'cors'
const port = 3066

// ตั้งค่า Session สำหรับระบบ
app.use(expressSession({
    secret: 'ttvone.com',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

// ตั้งค่าการ Parse ตัวแปรเมื่อ Client ส่งข้อมูลเข้ามา
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// สร้าง Custom function
app.use(require('./configs/middleware'));
// เรียกใช้งาน routes
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
    res.end(`<h1>Backend server is startd.</h1>`);
});

app.listen(port, () => console.log(`Server is started, Port ${port}.`))





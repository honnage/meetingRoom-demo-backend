const express = require('express')
const server = express()
const port = 3066

server.get('/', (req, res) => res.send('Hello World!'))
server.listen(port, () => console.log(`Server is start on port ${port}!`))
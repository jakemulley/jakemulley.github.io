const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, './docs')))
app.listen(port)
console.log(`jakemulley.github.io running on localhost:${port}`)

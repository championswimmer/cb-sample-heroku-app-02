const express = require('express')

const app = express()

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/hello/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}</h1>`)
})



app.listen(PORT, () => {
    console.log('server started')
})
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/hello/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}</h1>`)
})



app.listen(3333, () => {
    console.log('server started')
})
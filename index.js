const express = require('express')
const app = express()
const port = 3001


app.get('/ping', (req,res) => {
    console.log('required')
    res.send('Hola desde backend 1')
})

app.listen(port, () => {
    console.log(`Backen 1 escuchando en http:localhost:${port}`)
})
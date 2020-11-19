const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.send('<h1>I am a server</h1>')
})

app.get('/contact', function(req, res) {
    res.send('<h1>I am a server contact</h1>')
})

app.get('/about', function(req, res) {
    res.send('<h1>I am a server about</h1>')
})

app.listen(port, function(){
    console.log('Server started on port', port);
})
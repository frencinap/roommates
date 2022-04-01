const express = require('express');
const app = express();
const { v4 } = require('uuid');
const fs = require('fs');

app.use(express.json())

app.listen(3000, ()=>{
    console.log('Servidor disponible en http://localhost:3000')
})

app.get('/', (req, res)=> {
    const web = fs.readFileSync('index.html', 'utf8');
    res.setHeader("Content-Type", "text/html")
    res.send(web)
})

const express = require('express');
const app = express();
const http = require('http').Server(app);


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})


http.listen(3000, () =>{
    console.log('The server is running on port 3000')
})


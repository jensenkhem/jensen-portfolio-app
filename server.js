const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.listen(3000, function() {
    console.log('Started a server on 3000');
});
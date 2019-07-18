const express = require('express');
const app = express();
const port = 8000;
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
var hits = 0;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/banner', function (req, res) {
    hits++;
    if (!req.cookies.hasOwnProperty("third-party")){
        res.cookie("third-party", hits.toString(), { maxAge: 9999999 });
    }
    else{
        console.log(req.cookies);
    }
    res.sendFile(path.join(__dirname + "/banner.png"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
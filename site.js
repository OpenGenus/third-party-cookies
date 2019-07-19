const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',function(req,res){
    res.cookie("first-party","785");
    res.sendFile(path.join(__dirname+"/homeSite.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
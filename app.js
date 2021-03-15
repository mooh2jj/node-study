const express = require('express');
const app = express();

app.get("/hello", function(req, res){
    res.send("hello world!");
})

app.listen(3000, function(req, res){    // 3000번포트 사용할 것!
    console.log("server start...");     // console.log => 터미널에도 나옴!
})
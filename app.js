const express = require("express");
const helmet = require("helmet");

const app = express();
const ejs = require("ejs");

// 브라우저에 띄울려면 
app.set('view engine', 'ejs');      // 확장자명이 ejs라니!
app.set('views', './views');
app.use('/public', express.static(__dirname + '/public'));

// 사이트 ---> 요청 --- middleware() --> Node.js

// post api 데이터를 받을 때 설정할 것!
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

// Roueter 관리!
const mainRouter = require('./router/mainRouter');  // mainRouterdptj router 가져오는 거!
app.use('/class101', mainRouter);                           // middelware에 설정!

app.listen(3000, function(req, res){    // 3000번포트 사용할 것!
    console.log("server 3000port start...");     // console.log => 터미널에도 나옴!
})
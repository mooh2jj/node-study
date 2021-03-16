
const express = require('express');
const router = express.Router();     // 주소관리!로 이쪽에 분할!

router.get("/", function(req, res){
    res.send("hello world!");
})

router.get("/about", function(req, res){
    res.send("About Page");
})

module.exports = router


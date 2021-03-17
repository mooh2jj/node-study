
const express = require('express');
const router = express.Router();     // 주소관리!로 이쪽에 분할!

router.get("/", function(req, res){

    res.render("index", {title:"EJS 메인페이지"});
})

router.get("/about", function(req, res){
    res.send("About Page");
})

router.post("/postapi", function(req, res){
    let body =req.body;
    console.log(body.key); 
    res.send("Post Api");
})

module.exports = router


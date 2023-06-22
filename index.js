var express = require('express');
var app = express();
var fs = require("fs");

app.get('/fetchversion', function (req, res) {
   res.json('test api');
})

var server = app.listen(5001, function () {
   
   console.log("app is running on 5001")
})

var http = require('http');  
var express = require("express");
var app     = express();
var path    = require("path");

app.use("/style", express.static(__dirname + '/style'));

app.use("/scripts", express.static(__dirname + '/scripts'));

app.use("/assets", express.static(__dirname + '/assets'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT, process.env.IP);

console.log('Server running at ' + process.env.PORT + ' ' + process.env.IP);
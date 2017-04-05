var http = require('http');  
var express = require("express");
var app     = express();
var path    = require("path");

var quotes = [
  { author : 'Dmitry Pustovit', text : "In the end, are we not all Robots?"},
  { author : 'Taylor White', text : "You know what would make it better?...Internet Explore 6..."},
  { author : 'Brandon', text : "*Sigh*"}
];

app.use("/style", express.static(__dirname + '/style'));

app.use("/scripts", express.static(__dirname + '/scripts'));

app.use("/assets", express.static(__dirname + '/assets'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/layout.html'));
});

app.get('/turtle', function(req, res) {
  res.json(quotes);
});

app.listen(process.env.PORT, process.env.IP);

console.log('Server running at ' + process.env.PORT + ' ' + process.env.IP);
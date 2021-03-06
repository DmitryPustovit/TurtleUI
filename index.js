var http = require('http');  
var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require("body-parser");
var sketchUniversalVar = 0;
var sketchX = null;
var sketchY = null;

var quotes = [
  { author : 'Dmitry Pustovit', text : "In the end, are we not all Robots?"},
  { author : 'Taylor White', text : "You know what would make it better?...Internet Explore 6..."},
  { author : 'Brandon', text : "*Sigh*"}
];

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); 

app.use("/style", express.static(__dirname + '/style'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/assets", express.static(__dirname + '/assets'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

//Possible Future Layout
app.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/layout.html'));
});

//JSON Test
app.get('/turtle', function(req, res) {
  res.json(quotes);
});

app.get('/controller',function(req,res){
  res.sendFile(path.join(__dirname+'/controller.html'));
});

app.post('/control',function(req,res){
    sketchUniversalVar = req.body.int;
    console.log(sketchUniversalVar);
    //res.send(200);
});

app.post('/cord',function(req,res){
    sketchX = req.body.x;
    sketchY = req.body.y;
    //sketchY = req.body.int[1];
    //console.log(sketchX);
    //res.send(200);
});

app.get('/command',function(req,res){
    res.json(sketchUniversalVar);
});

app.get('/getcord',function(req,res){
    res.json([sketchX, sketchY]);
});

app.listen(process.env.PORT, process.env.IP);

console.log('Server running at ' + process.env.PORT + ' ' + process.env.IP);


//Things I want to get done.
//Template and or Node.JS view system rather then relying on html
//Basic database
// app.js
// load the things we need
var express = require('express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');

function cmdField(strName, strValue) {
    this.strName = strName;
    this.strValue = strValue;
}

function cmdItem(id, name, fields) {
    this.id = id;
    this.name = name;
    this.fields = fields;
}

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    var logDate = new Date().toISOString();
    var logMessage = logDate + " LOG: access Home page from " + req.headers["user-agent"];
    console.log(logMessage);
    res.render('pages/index', {
        cmdlist: new Array()
    });
});

// compare page 
app.get('/compare', function(req, res) {
    var logDate = new Date().toISOString();
    var logMessage = logDate + " LOG: access Compare page from " + req.headers["user-agent"];
    console.log(logMessage);
    res.render('pages/compare', {
        diffResult: ""
    });
});

// about page 
app.get('/about', function(req, res) {
    var logDate = new Date().toISOString();
    var logMessage = logDate + " LOG: access About page from " + req.headers["user-agent"];
    console.log(logMessage);
    res.render('pages/about');
});

app.listen(8080);
console.log('Listening http://localhost:8080');

// server.js

/*
const port = 8000;
const express = require("express");
const app = express();
const bodyparser = require("body-parser");


app.use(bodyparser.json());         
app.use(bodyparser.urlencoded({ extended: false }));


let jsonParser = bodyparser.json();

app.post('http://localhost:8000/', jsonParser, (req, res) => { 
	let data = req.body.value; 
	console.log(data) 
	res.send("success");
}) 
 
app.listen(port, () => { 
	console.log('App running..') 
})
*/


/*
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
  console.log(req.body.value);
})
*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/endpoint', function(req, res){
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

app.listen(8000);
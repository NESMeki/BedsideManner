// server.js

var express = require('express');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/', function(req, res){
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);

	let record = req.body;
	fs.readFile('visit-log.json', function(err, data) {
		var json = JSON.parse(data);
		json.unshift(record);
		console.log(JSON.stringify(json));
		fs.writeFileSync('visit-log.json', JSON.stringify(json));
	});

});

app.get('/', function(req, res) {
	fs.readFile('visit-log.json', function(err, data) {
		var json = JSON.parse(data);
		res.send(json);
	});
});

app.listen(8000);

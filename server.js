// server.js
const port = 5000;
const express = require("express");
const app = express();
const bodyparser = require("bodyparser");

app.use(bodyparser.json());         
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/', (req, res) => { 
	let data = req.body.value;
	console.log(data) 
	res.json("success");
}) 
 
app.listen(port, () => { 
	console.log('App running..') 
})
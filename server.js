// server.js
const port = 5000;


const express = require("express");
const app = express();
// const bodyparser = require("bodyparser");

//app.use(bodyparser.json());         
// app.use(bodyparser.urlencoded({ extended: false }));

app.get('/', (req, res) => { 
	console.log(req.body.value) 
	// outputs input's value 
}) 
 
app.listen(port, () => { 
	console.log('App running..') 
})
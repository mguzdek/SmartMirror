﻿var express = require('express');
var app = express();
var fs = require("fs");

//GET all data
app.get('/listSensorsData', function (req, res) {
    fs.readFile(__dirname + "/" + "sensorsData.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

//GET sensor last measurement
app.get('/lastValue', function (req, res) {    
    fs.readFile(__dirname + "/" + "sensorsData.json", 'utf8', function (err, data) {
        sensorsData = JSON.parse(data);
        var result = sensorsData[req.param('id')]        
        var lastMeasurement = result['data'].pop()
        console.log(lastMeasurement);
        res.end(JSON.stringify(lastMeasurement));
    });
})

//GET a specific sensor all data
app.get('/:id', function (req, res) {    
    fs.readFile(__dirname + "/" + "sensorsData.json", 'utf8', function (err, data) {
        sensorsData = JSON.parse(data);
        var result = sensorsData[req.params.id]        
        console.log(result);
        res.end(JSON.stringify(result));
    });
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
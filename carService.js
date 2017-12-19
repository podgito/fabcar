const express = require('express')
var Fabric_Client = require('fabric-client');
var path = require('path');
var util = require('util');
var os = require('os');

var fabric_client = new Fabric_Client();

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/padraic', (req, res) => res.send('Hello Padraic!'))


app.get('cars', (req, res) => {
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
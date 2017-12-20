const express = require('express')
// var Fabric_Client = require('fabric-client');
var path = require('path');
var util = require('util');
var os = require('os');

// var fabric_client = new Fabric_Client();

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/padraic', (req, res) => res.send('Hello Padraic!'))


app.get('/cars', (req, res) => {
    res.send('[{"Key":"CAR0", "Record":{"colour":"blue","make":"Toyota","model":"Prius","owner":"Tomoko"}},{"Key":"CAR1", "Record":{"colour":"red","make":"Ford","model":"Mustang","owner":"Brad"}},{"Key":"CAR2", "Record":{"colour":"green","make":"Hyundai","model":"Tucson","owner":"Jin Soo"}},{"Key":"CAR3", "Record":{"colour":"yellow","make":"Volkswagen","model":"Passat","owner":"Max"}},{"Key":"CAR4", "Record":{"colour":"black","make":"Tesla","model":"S","owner":"Adriana"}},{"Key":"CAR5", "Record":{"colour":"purple","make":"Peugeot","model":"205","owner":"Michel"}},{"Key":"CAR6", "Record":{"colour":"white","make":"Chery","model":"S22L","owner":"Aarav"}},{"Key":"CAR7", "Record":{"colour":"violet","make":"Fiat","model":"Punto","owner":"Pari"}},{"Key":"CAR8", "Record":{"colour":"indigo","make":"Tata","model":"Nano","owner":"Valeria"}},{"Key":"CAR9", "Record":{"colour":"brown","make":"Holden","model":"Barina","owner":"Shotaro"}}]');
})

app.get('/carHistory/:key', (req, res) => {
    res.send('[{"TxId":"30e19db83970864f8b28ffd9edc6fd0d89efb14b06563eae12af8890de6445f4", "Value":{"make":"Lambo","model":"Guido","colour":"Yellow","owner":"Alex"}, "Timestamp":"2017-12-19 13:48:28.891 +0000 UTC", "IsDelete":"false"},{"TxId":"fee488c362c4eaf3f27214ead8946d5f95e47733b4df68c4b7468ef822a8f59d", "Value":{"make":"Lambo","model":"Guido","colour":"Yellow","owner":"Padraic"}, "Timestamp":"2017-12-19 13:49:02.21 +0000 UTC", "IsDelete":"false"},{"TxId":"3576a5fbaba590cf348b9e3cf2b985f8595e8279c57f3e469c9edecdbc8417a3", "Value":{"make":"Lambo","model":"Guido","colour":"Yellow","owner":"Farron"}, "Timestamp":"2017-12-19 13:49:19.402 +0000 UTC", "IsDelete":"false"}]');
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
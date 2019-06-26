
  
  
  var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'anil',lastName:'patil',orderamt:300,creditamt:20},
            {firstName:'soham',lastName:'kure',orderamt:3500,creditamt:210},
            {firstName:'rahul',lastName:'mote',orderamt:8540,creditamt:500},
            {firstName:'mahesh',lastName:'shinde',orderamt:8800,creditamt:0},
            {firstName:'Manoj',lastName:'poul',orderamt:3600,creditamt:1320}
      ];
  res.send(customers);
};



app.get('/customers',customerController );

var server = app.listen(8099, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})
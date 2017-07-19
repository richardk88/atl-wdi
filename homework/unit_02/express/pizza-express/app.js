const express = require('express');
const hbs = require('hbs');

const app = express();

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
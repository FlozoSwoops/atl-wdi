const express = require('express');
const app = express()

var port = 3000

app.listen (port, () => {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });
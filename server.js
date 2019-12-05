////////////////////////////////////////////////////////////////////////////////
// FILE: server.js
// AUTHOR: David Ruvolo
// CREATED: 2019-11-01
// MODIFIED: 2019-12-05
// PURPOSE: server for node.js and express.js application
// DEPENDENCIES: express, bodyParser, node
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN

// require
const express = require('express');
const bodyParser = require('body-parser');
const { R } = require("@fridgerator/r-script");

// define app and set port
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////////

// 1
// Process User Input 
app.post('/data', (req, res) => {

  // get input
  let power = parseInt(req.body.power);
  let input = parseInt(req.body.value);
 
  // process data using js Math.pow()
  let sqrdJS = Math.pow(input, power);

  // run through R script
  let r = new R("./R/index.R");
  r.data(input, power);
  let sqrdR = r.callSync();

  // send results
  res.send({
    sqrdJS: sqrdJS,
    sqrdR: sqrdR,
  })
})


////////////////////////////////////////

// set port
app.listen(port, () => console.log(`Listening on port ${port}`));
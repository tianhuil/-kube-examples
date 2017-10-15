'use strict';

const express = require('express'),
      MongoClient = require('mongodb').MongoClient,
      assert = require('assert');

// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// Connection URL
var MONGO_URL = process.env.MONGO_URL

// Use connect method to connect to the server
MongoClient.connect(MONGO_URL + "/myproject", function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

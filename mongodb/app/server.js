'use strict';

const express = require('express'),
      MongoClient = require('mongodb').MongoClient,
      assert = require('assert');

// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// Connection URL
var MONGO_URL = process.env.MONGO_URL + "/myproject"

// Use connect method to connect to the server
MongoClient.connect(MONGO_URL, function(err, db) {
  assert.equal(null, err);
  db.collection("counters", {w:1}, function(err, collection) {
    assert.equal(null, err);
    collection.insert({ name: "counter", ran: 0 }, {w:1}, function(err, res) {
      assert.equal(null, err);
      collection.findOne({ name: "counter" }, function(err, doc) {
        console.log(`Connected successfully to server ${doc.ran}`);
        return db.close();
      });
    });
  });
});

// App
const app = express();
app.get('/', (req, res) => {
  MongoClient.connect(MONGO_URL, function(err, db) {
    assert.equal(null, err);
    db.collection("counters").findOne({ name: "counter" }, function(err, doc) {
      console.log(`Hitting / with ${doc.ran}`);
      res.send(`Hello world ${doc.ran}\n`);
      db.collection("counters").update({
        name: "counter"
      }, { $inc: { ran: 1 }
      }, { upsert: true, w: 1
      }, function(err, doc) {
          assert.equal(null, err);
          return db.close();
      });
    });
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

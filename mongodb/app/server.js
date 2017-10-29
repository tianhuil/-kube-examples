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
MongoClient.connect(MONGO_URL).then(function(db) {
  const collection = db.collection("counters", {w:1});
  collection.insert({ name: "counter", ran: 0 }, {w:1}).then(function(res) {
    return collection.findOne({ name: "counter" });
  }).then(function(doc) {
    console.log(`Connected successfully to server ${doc.ran}`);
    return db.close();
  }).catch(function(err) {
    console.log(err);
  });
});

// App
const app = express();
app.get('/', (req, res) => {
  MongoClient.connect(MONGO_URL).then(function(db) {
    const collection = db.collection("counters")
    collection.findOne({ name: "counter" }).then(function(doc) {
      console.log(`Hitting / with ${doc.ran}`);
      res.send(`Hello world ${doc.ran}\n`);
      return collection.update(
        { name: "counter" },
        { $inc: { ran: 1 }},
        { upsert: true, w: 1}
      );
    }).then(function(doc) {
      return db.close();
    }).catch(function(err) {
      console.log(err);
    });
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

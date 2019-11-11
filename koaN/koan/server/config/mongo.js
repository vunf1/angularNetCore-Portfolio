'use strict';

/**
 * MongoDB configuration using generators (with the help of co-mongo package).
 * You can require this config file in your controllers and start using named collections directly.
 * See /controllers directory for sample usage.
 */

var mongodb = require('mongodb'),
    connect = mongodb.connect,
    config = require('./config');

// extending and exposing top co-mongo namespace like this is not optimal but it saves the user from one extra require();
module.exports = mongodb;

/**
 * Opens a new connection to the mongo database, closing the existing one if exists.
 */
mongodb.connect = async function () {
  if (mongodb.db) {
    await mongodb.db.close();
  }

  // export mongo db instance
  var db = mongodb.db = await connect(config.mongo.url);

  // export default collections
  mongodb.counters = db.collection('counters');
  mongodb.users = db.collection('users');
  mongodb.posts = db.collection('posts');
};

/**
 * Retrieves the next sequence number for the given counter (indicated by @counterName).
 * Useful for generating sequential integer IDs for certain collections (i.e. user collection).
 */
mongodb.getNextSequence = async function (counterName) {
  var results = await mongodb.counters.findOneAndUpdate(
      {_id: counterName},
      {$inc: {seq: 1}},
      {returnOriginal: false}
  );

  return results.value.seq
};
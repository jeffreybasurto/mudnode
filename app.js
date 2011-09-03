(function() {
  var MyModel, ObjectId, Schema, Test, express, instance, mongoose, _;
  express = require('express');
  mongoose = require('mongoose');
  _ = require('underscore');
  mongoose.connect(process.env.MONGOLAB_URI);
  Schema = mongoose.Schema;
  ObjectId = Schema.ObjectId;
  Test = new Schema({
    title: String
  });
  mongoose.model('Test', Test);
  MyModel = mongoose.model('Test');
  instance = new MyModel;
  instance.title = 'hello';
  instance.save(function(err) {
    return console.log("saving");
  });
  MyModel.find({}, function(err, docs) {
    return _.each(docs, function(d) {
      return console.log(d);
    });
  });
  console.log(process.env.MONGOLAB_URI);
}).call(this);

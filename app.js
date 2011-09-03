(function() {
  var MyModel, Player, express, mongoose, player, _;
  express = require('express');
  mongoose = require('mongoose');
  _ = require('underscore');
  mongoose.connect(process.env.MONGOLAB_URI);
  Player = new mongoose.Schema({
    name: String
  });
  mongoose.model('Player', Player);
  MyModel = mongoose.model('Player');
  player = new MyModel;
  player.name = 'Testuser';
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

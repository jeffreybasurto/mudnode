(function() {
  var MyModel, Player, app, express, mongoose, player, port, _;
  express = require('express');
  app = express.createServer(express.logger());
  port = process.env.PORT || 3000;
  app.get('/', function(request, response) {
    return response.send('Welcome to MudNode.');
  });
  app.listen(port, function() {
    return console.log("Listening on " + port);
  });
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
  player.save(function(err) {
    return console.log("saving");
  });
  MyModel.find({}, function(err, docs) {
    return _.each(docs, function(d) {
      return console.log(d);
    });
  });
}).call(this);

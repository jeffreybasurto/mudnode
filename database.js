(function() {
  var Player, mongoose, player;
  mongoose = require('mongoose');
  mongoose.connect(process.env.MONGOLAB_URI);
  Player = new mongoose.Schema({
    name: String
  });
  player = new Player;
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

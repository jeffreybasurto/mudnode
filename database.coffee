# for database 
mongoose = require 'mongoose'

mongoose.connect process.env.MONGOLAB_URI

# a single user in the database
PlayerSchema = new mongoose.Schema { name: String}

Player = mongoose.model('Player', PlayerSchema);

player = new Player
player.name = 'Testuser'

player.save (err) ->
  console.log("saving")

Player.find {}, (err, docs) ->
  _.each docs, (d)-> console.log(d)


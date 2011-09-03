# for web server
express = require 'express'

# for database 
mongoose = require 'mongoose'
# for optional utiltiy
_ = require 'underscore'

mongoose.connect process.env.MONGOLAB_URI

# a single user in the database
Player = new mongoose.Schema { name: String}
mongoose.model('Player', Player)

MyModel = mongoose.model 'Player'
player = new MyModel
player.name = 'Testuser'

instance.save (err) ->
  console.log("saving")

MyModel.find {}, (err, docs) ->
  _.each docs, (d)-> console.log(d)
  
  
console.log(process.env.MONGOLAB_URI)


  



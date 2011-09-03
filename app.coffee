# for web server
express = require 'express'
app = express.createServer express.logger()
port = process.env.PORT || 3000; # web port, you can change the 3000 for local dev.  

app.get '/', (request, response) ->
  response.send 'Welcome to MudNode.'

app.listen port, ->
  console.log("Listening on " + port)
  
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

player.save (err) ->
  console.log("saving")

MyModel.find {}, (err, docs) ->
  _.each docs, (d)-> console.log(d)

  



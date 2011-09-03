# for web server
express = require 'express'
app = express.createServer express.logger()
port = process.env.PORT || 3000; # web port, you can change the 3000 for local dev.  

app.get '/', (request, response) ->
  response.send 'Welcome to MudNode.'
  response.send 'Operating as an echo server.'

app.listen port, ->
  console.log("Listening on " + port)

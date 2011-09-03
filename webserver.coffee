# for web server
express = require 'express'
app = express.createServer express.logger()
port = process.env.PORT || 3000; # web port, you can change the 3000 for local dev.  

app.set('view engine', 'eco') # use jade templates by default.
                              # they're just like erb but with coffeescript.
app.set('view options', {layout: false}) # no html layout.

app.get '/', (request, response) ->
  response.render('index')

app.listen port, ->
  console.log("Listening on " + port)

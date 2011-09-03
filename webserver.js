(function() {
  var app, express, port;
  express = require('express');
  app = express.createServer(express.logger());
  port = process.env.PORT || 3000;
  app.get('/', function(request, response) {
    response.send('Welcome to MudNode.');
    return response.send('Operating as an echo server.');
  });
  app.listen(port, function() {
    return console.log("Listening on " + port);
  });
}).call(this);

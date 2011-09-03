(function() {
  var app, express, port;
  express = require('express');
  app = express.createServer(express.logger());
  port = process.env.PORT || 3000;
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.get('/', function(request, response) {
    return res.render('index');
  });
  app.listen(port, function() {
    return console.log("Listening on " + port);
  });
}).call(this);

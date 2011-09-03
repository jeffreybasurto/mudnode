(function() {
  var app, express, port;
  express = require('express');
  app = express.createServer(express.logger());
  port = process.env.PORT || 3000;
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'eco');
  app.set('view options', {
    layout: false
  });
  app.get('/', function(request, response) {
    return response.render('index');
  });
  app.listen(port, function() {
    return console.log("Listening on " + port);
  });
  exports.app = app;
}).call(this);

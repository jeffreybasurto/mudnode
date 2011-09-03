(function() {
  var Webserver, io;
  Webserver = require('./webserver.js');
  require('./database.js');
  io = require('socket.io').listen(Webserver.app);
  io.configure(function() {
    io.set("transports", ["xhr-polling"]);
    return io.set("polling duration", 10);
  });
  io.sockets.on('connection', function(socket) {
    socket.emit('msg', "hello world");
    return socket.on('cmd', function(data) {
      return console.log(data);
    });
  });
}).call(this);

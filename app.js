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
      var s, _i, _len, _ref, _results;
      _ref = io.sockets.clients();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        s = _ref[_i];
        _results.push(s.emit("msg", "echoing input to all:" + data));
      }
      return _results;
    });
  });
}).call(this);

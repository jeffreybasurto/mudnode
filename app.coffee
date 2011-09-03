# for optional utiltiy

Webserver = require './webserver.js' # example for the webserver
require './database.js' # example for the database


io = require('socket.io').listen(Webserver.app)

io.configure -> 
  io.set("transports", ["xhr-polling"])
  io.set("polling duration", 10)

io.sockets.on 'connection', (socket) ->
  socket.emit 'msg', "hello world"
  socket.on 'cmd', (data) ->
    s.emit("msg", "echoing input to all:" + data) for s in io.sockets.clients()
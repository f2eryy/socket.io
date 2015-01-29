/**
 * Project          : PWP-Personal work platform
 * Version      : 1.0
 * Author           :front-end web developer(FED)   zhuyangyang
 * create:2014-9-15
 * last updata :2014-9-15
 */
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
    //fs = require('fs')

app.listen(3003);
io.set('log level', 1);//将socket.io中的debug信息关闭

function handler (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('11111111111111111111111111');
  /* fs.readFile(__dirname + '/index.html',function (err, data) {
      if (err) {
         res.writeHead(500);
         return res.end('Error loading index.html');
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
   });*/
}

var sockets = [];
var i = 1;
io.sockets.on('connection', function (socket) {
   sockets[i] = socket;
   i++;
   socket = sockets[1];  //这里指定向第一个客户发送消息
   console.log(i);
   socket.emit('news', { hello: 'world' });
   socket.on('my other event', function (data) {
      console.log(data);
   });
});



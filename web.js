var express = require('express');
	app = express(),
	server = require('http').createServer(app),
	path = require('path');
	// io = require('socket.io').listen(server);

server.listen(process.env.PORT || 8000);

// 静的ファイルの場所を指定する(この配下で、CSS,JS,IMG,音声ファイルなどの静的ファイルが使用可能に)
// 通常 '/public' などに静的ファイルを置くが /socket.io/socket.io.js が404になってしまった為 '/' に変更
app.use(express.static(path.join(__dirname, '/')));

// ルートにアクセスがあったらindex.htmlを表示する
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Herokuは下記を入れないとSocket.ioが動かない情報がWebにあったが、なくても動くもよう(WebSocketに対応されたからか)
// io.configure(function () { 
//   io.set("transports", ["xhr-polling"]); 
//   io.set("polling duration", 10); 
// });

// io.set('log level', 1); // 自動で出るデバック情報を出さない(ローカルでデバックする際に使用)

// クライアント(index.html)からの接続を監視
// io.sockets.on("connection", function (socket) {
// 	// クライアントから "emit_from_client" が送られてきたら
// 	socket.on("emit_from_client", function (id) {
// 		// 接続しているソケットのみにidを送信する
// 		// socket.emit("emit_from_server", id);
		
// 		// 接続しているソケット以外全てにidを送信する
// 		//socket.broadcast.emit("emit_from_server", id);
		
// 		// 接続しているソケット含めて全部にidを送信する
// 		io.sockets.emit("emit_from_server", id);
// 	});
// });

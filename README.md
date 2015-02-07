## Node.js + Express + Socket.io + WebAudio on Heroku
NodeJS(Express)、Socket.io、WebAudioを使って、  
各デバイス間で双方向通信して音声を再生するサンプルをHerokuにデプロイ。

### URL
https://nodejs-socketio-webaudio.herokuapp.com/


### install and running(local)
```
git clone https://github.com/NaokiOtsu/nodejs-socketio-webaudio.git
cd nodejs-socketio-webaudio
npm install
node web.js
```
access to http://localhost:8000  

※ index.htmlのこちらのコメントを外してローカルにconnectする  
```
Line119. // var socketio = io.connect('http://localhost:8000');
```

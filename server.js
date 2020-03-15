var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser= require('body-parser');
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;
// var session = require('express-session');

var server = http.listen(port, function() {
  console.log("★★★ Server Started ★★★");
});

app.use(express.static(__dirname + '/'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var numList =[];

app.use('/addNum', function(req, res) {
  var params = req.query;
  var addNum = params.addNum;
  console.log("/addNum >> ",addNum);

  // req.session.numList ? numList = req.session.numList : '';
  if(numList.indexOf(addNum)<0){
    numList.push(addNum);
    res.json({
      reCd : '01'
      ,numList : numList
    });
  }else{
    res.json({
      reCd : '03'
      ,numList : numList
    });
  }
  io.sockets.emit('changeNum',numList);
});
app.use('/delNum', function(req, res) {
  var params = req.query;
  var delNum = params.delNum;
  console.log("/delNum >> ",delNum);
  if(numList.length>0){
    var resultList = [];
    for(var i=0; i<numList.length; i++){
      if(numList[i] !== delNum){
        resultList.push(numList[i]);
      }
    }
    if(numList.length != resultList.length){
      numList = resultList;
      res.json({
        reCd:'01'
        ,numList : resultList
      });
      io.sockets.emit('changeNum',resultList);
    }else{ // 삭제할 대상이 없음
      res.json({
        reCd:'02'
        ,numList : numList
      });
    }
  }else{ // 숫자 리스트가 비어있음
    res.json({
      reCd : '03'
      ,numList : resultList
    });
  }
});

app.use('/getNumList', function(req, res) {
  console.log('/getNumList');
  res.json({
    reCd : '01'
    ,numList : numList
  });
});

io.on('connection', (socket) => {
  socket.on('conn', ()=>{
    console.log('★★★ socket connected ★★★\n');
  });
  socket.on('disconn', () => {
    console.log('★★★ socket disconnected ★★★');
  });
});

app.use('/',function(req, res) {
  res.render('index', {numList:numList});
});

app.use(function(req,res,next){
  throw new Error(req.url + ' not Found');
});

module.exports = app;
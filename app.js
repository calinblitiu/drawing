var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var Device = require('./device');
var bodyParser = require('body-parser');
var multer = require('multer');

var devices = [];

app.use(function (req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// app.use(express.static(path.join(__dirname, 'uploads')));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('*', function(req, res, next) {
  res.sendFile(__dirname+"/public/index.html");
});

app.get('/deviceslist', function (req, res, next) {
  var tempDvices = [];
  devices.map(device => {
    tempDvices.push({
      deviceId: device.deviceId,
      deviceName: device.deviceName
    });
  });

  res.send(JSON.stringify(tempDvices));
});

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});

var upload = multer({ //multer settings
  storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    console.log(req.file);
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    res.json({ error_code: 0, err_desc: null, url: req.file.filename });
  });
});



var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
  // mobile
  socket.on('device', function(data) {
    if (data.status === 'connected') {
      var flag = false;
      devices.map(device => {
        if (device.deviceId === data.id) {
          device.socket = socket;
          device.status = data.status;
          console.log('old device is actived');
          flag = true;
          // device.initDeviceSocket();
        }
      });
      if (!flag) {
        var device = new Device(data.name, data.id, socket);
        devices.push(device);
        console.log('new device is added');
        device.initDeviceSocket();
      }
      
    } else {
      devices.map(device => {
        if(device.deviceId === data.id) {
          device.socket = null;
          device.status = data.status;
        }
      });
      console.log('device is disconnected');
    }

    socket.broadcast.emit('device');
  });


  // web
  socket.on('devices list', function () {
    console.log("devices list");
    var tempDvices = [];
    devices.map(device => {
      if (device.status === 'connected'){
        var isConnected = false;
        var connectedSocketId = '';
        if (device.connectedSocket) {
          isConnected = true;
          connectedSocketId = device.connectedSocket.id;
        }
          
        tempDvices.push({
          deviceId: device.deviceId,
          deviceName: device.deviceName,
          isConnected: isConnected,
          connectedId: connectedSocketId
        });
      }
    });
    socket.emit('devices list', tempDvices);
  });

  socket.on('device connect', function(data) {
    devices.map(device => {
      if (data.deviceId === device.deviceId && device.status === 'connected') {
        if (device.connectedSocket) {
          device.connectedSocket = null;
        } else {
          device.connectedSocket = socket;
        }
        
        device.initConnect();
      }
    });
  });

  // socket.on('new message', function (data) {
  //   console.log(data);
  //   socket.broadcast.emit('new message', {
  //     command: 'Hello command',
  //     id: data
  //   });
  // });

  socket.on('disconnect', function () {
    devices.map(device => {
      if (device.socket === socket) {
        device.status = 'disconnected';
        device.connectedSocket = null;
      } else if (device.connectedSocket ===  socket){
        device.connectedSocket = null;
      }

    });
    socket.broadcast.emit('device');
  });



});

server.listen(8000);
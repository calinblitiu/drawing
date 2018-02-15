var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var Device = require('./device');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var AM = require('./user_module');


var devices = [];
app.locals.pretty = true;
app.use(function (req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/index', function(req, res) {
 if (req.cookies == undefined || req.cookies.user == undefined){
   res.redirect('/login');
 } else {
   res.sendFile(__dirname + "/public/first.html");
 }
  
});

app.get('/', function (req, res) {
    res.redirect('/index');
});


app.get('/login', function (req, res) {
  res.sendFile(__dirname + "/public/login.html");
  // res.redirect('/');
});

app.post('/signin', function (req, res) {
  console.log(req.body);
  
  AM.manualLogin(req.body['user'], req.body['password'], function (e, o) {
    if (!o) {
      res.status(400).send(e);
    } else {
      //req.session.user = o;
      //if (req.body['remember-me'] == 'true') {
        res.cookie('user', o.user, { maxAge: 900000 });
        res.cookie('pass', o.pass, { maxAge: 900000 });
      //}
      res.status(200).send(o);
    }
  });
});

app.get("/signup", function(req, res){
  res.sendFile(__dirname + "/public/signup.html");
});

app.post('/signup', function (req, res) {
  console.log(req.body);
  
  AM.addNewAccount({
    email: req.body['email'],
    user: req.body['user'],
    pass: req.body['pass'],
    firstname: req.body['firstname'],
    lastname: req.body['lastname']
  }, function (e) {
    if (e) {
      res.status(400).send(e);
    } else {
      AM.manualLogin(req.body['user'], req.body['pass'], function (e, o) {
        if (!o) {
          res.status(400).send(e);
        } else {
          //req.session.user = o;
          //if (req.body['remember-me'] == 'true') {
          res.cookie('user', o.user, { maxAge: 900000 });
          res.cookie('pass', o.pass, { maxAge: 900000 });
          //}
          res.status(200).send(o);
        }
      });
    }
  });
});

app.post('/updateuser', function(req, res) {
  console.log(req.body);
  
  AM.updateAccount(req.body, function (e, o) {
    if (!o) {
      res.status(400).send(e);
    } else {
      //req.session.user = o;
      //if (req.body['remember-me'] == 'true') {
      res.cookie('user', o.user, { maxAge: 900000 });
      res.cookie('pass', o.pass, { maxAge: 900000 });
      //}
      res.status(200).send(o);
    }
  });
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



var dbHost = process.env.DB_HOST || 'localhost'
var dbPort = process.env.DB_PORT || 27017;
var dbName = process.env.DB_NAME || 'drawing';

var dbURL = 'mongodb://' + dbHost + ':' + dbPort + '/' + dbName;
if (app.get('env') == 'live') {
  // prepend url with authentication credentials // 
  dbURL = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + dbHost + ':' + dbPort + '/' + dbName;
}
app.use(session({
  secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
  proxy: true,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: dbURL
  })
}));
server.listen(80);
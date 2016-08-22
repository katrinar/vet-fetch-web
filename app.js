var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var sessions = require('client-sessions');
var cloudinary = require('cloudinary');

var routes = require('./routes/index');
var api = require('./routes/api');
var account = require('./routes/account');

var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/vet-app' 
mongoose.connect(mongoUrl, function(err, res){
  if(err){
    console.log('DB Connection Failed:'+err)
  }

  else {
    console.log('DB Connection Success:'+mongoUrl)
  }
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.post('/upload', function(req, res){
  var imageStream = fs.createReadStream(req.files.image.path, { encoding: 'binary' })
    , cloudStream = cloudinary.uploader.upload_stream(function() { res.redirect('/'); });

  imageStream.on('data', cloudStream.write).on('end', cloudStream.end);
})

app.get('/', function(req, res, next){  
  cloudinary.api.resources(function(items){
    res.render('index', { images: items.resources, title: 'Gallery' });
  });
});

cloudinary.config({
    cloud_name: 'mtech',
    api_key: '289663892411772',
    api_secret: 'wqCHR14jkti89DZSy0cXRnDlKkg'
  })

// app.configure('development', function(){
//   app.use(express.errorHandler());
//   cloudinary.config({
//     cloud_name: 'mtech',
//     api_key: '289663892411772',
//     api_secret: 'wqCHR14jkti89DZSy0cXRnDlKkg'
//   })
// })

app.locals.api_key = cloudinary.config().api_key;  
app.locals.cloud_name = cloudinary.config().cloud_name;  

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({
  cookieName: 'session',
  secret: 'akakakafj',
  duration: 24*60*60*1000,
  activeDuration: 30*60*1000
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api);
app.use('/account', account);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

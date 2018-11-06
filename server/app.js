var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var log = require('../config/log');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var AsyncWrap = require('./common/async')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../web/views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../web/public')));

//logger
app.all("*", AsyncWrap(async (req, res, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  ms = new Date() - start;
  try {
    //开始进入到下一个中间件
    await next();
    // throw new Error('400')
    //记录响应日志
    log.i(req, ms);
  } catch (error) {
    //记录异常日志
    log.e(req, error, ms);
  }

  console.log(`${req.method} ${req.url} - ${ms}ms-${res.statusCode}`);
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var postsRouter = require('./routes/posts');
const router = require('./routes/posts');

var app = express();
// db connection
require('./connection');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/posts', postsRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const db = require('./helpers/database');
app.set('view engine', 'ejs');

const apiRouter = require("./routes/api/index.router");

var app = express();

console.log("Connecting to database...");
db.getConnection();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", apiRouter);

module.exports = app;
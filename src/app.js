

const bodyParser = require('body-parser')
require('dotenv').config()

const express = require("express");
const routes = require("./routes");
const config = require('./config');
const path = require("path");

require('./config/db.mongo')();

const app = express();

// setting view engine templates
const swig = require('swig')
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);
swig.setDefaults({ cache: false });

// serving static files
app.use('/static', express.static('src/public'))


// for apis
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

module.exports = app;
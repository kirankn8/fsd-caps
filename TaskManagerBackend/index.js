const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const app = express();

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('MongoDB connection succesfully established')
});


//  Middlewares
app.use(session({
    key: 'e_session_cookie',
    secret: 'session_cookie_secret',
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('session_cookie_secret'));
app.use(cors({
    origin: [
        "http://localhost:4200"
    ],
    credentials: true
}));

// Routes
app.use('/', routes);

app.listen(config.serverport, () => {
    console.log('Task Mangaer Backend is listening on port: ' + config.serverport)
});

module.exports = app;
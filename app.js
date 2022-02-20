const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./server/routes/routes');

// initializing app server

//api key : 42c24a0371ea44a1b332e02aadc7c018

//dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
//using bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


//using static files in our app
app.use('/css', express.static(path.resolve(__dirname, '/public/css')));
app.use('/images', express.static(path.resolve(__dirname, '/public/images')));
app.use('/js', express.static(path.resolve(__dirname, '/public/js')));

//
app.set('view engine', 'ejs');

// importing routes
app.use('/', router);

// server in listening mode
app.listen(PORT, () => console.log('server is running at http://localhost:' + PORT));
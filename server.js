// import packages that we need
const express = require('express');
const bodyParser = require('body-parser');

// define app
const app = express();

// use port 8080 unless there exists a preconfigured port
const port = process.env.PORT || 8080;

// use ejs layouts
app.set('view engine', 'ejs');

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// route our app
const router = require('./app/routes');
app.use('/', router);

// start the server
app.listen(port, () =>{
    console.log(`${port} is the magic port`);
});
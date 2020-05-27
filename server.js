'use strict';

// Load Environment Variables from the .env file.
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
// const superagent = require('superagent');


// Application Setup
const PORT = process.env.PORT;
const app = express();

app.use(cors()); // Middleware

// app.get('/', (request, response) => {
//   response.send('City Explorer Goes Here');
// });

app.use(express.static('./public'));

//require modules
const client = require('./util/db');
const locationHandler = require('./modules/locations');
const weatherHandler = require('./modules/weather');
const trailsHandler = require('./modules/trails');
// const yelpHandler = require('./modules/yelp');
// const moviesHandler = require('./modules/movies');
const errorHandler = require('./modules/errors');
const notFoundHandler = require('./modules/errors');


// Add /location route
app.get('/location', locationHandler);
app.get('/weather', weatherHandler);
app.get('/trails', trailsHandler);
// app.get('/yelp',yelpHandler);
// app.get('/movies', moviesHelper);

// Has to happen after everything else
app.use(notFoundHandler);
// Has to happen after the error might have occurred
app.use(errorHandler); // Error Middleware

//Make sure the server is listening for requests
client.connect()
  .then (() => {
    console.log('PG Connected!');
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
  })
  .catch(err => {
    throw `PG error!: ${err.message}`;
  });


'use strict';

// Load Environment Variables from the .env file.
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT;
const app = express();

app.use(cors()); // Middleware

// app.get('/', (request, response) => {
//   response.send('City Explorer Goes Here');
// });

app.use(express.static('./public'));

// Add /location route
app.get('/location', locationHandler);

app.get('/weather', weatherHandler);

// Route Handler
function locationHandler(request, response) {
  const geoData = require('./data/geo.json');
  const city = request.query.city;
  const location = new Location(city, geoData);
  response.send(location);
}

function weatherHandler(request, response) {
  const { latitude, longitude } = request.query;
  weather(latitude, longitude)
    .then(summaries => sendJson(summaries, response))
    .catch((error) => errorHandler(error, request, response));
}

// Has to happen after everything else
app.use(notFoundHandler);
// Has to happen after the error might have occurred
app.use(errorHandler); // Error Middleware


// Helper Functions

function errorHandler(error, request, response, next) {
  console.log(error);
  response.status(500).json({
    error: true,
    message: error.message,
  });
}

function notFoundHandler(request, response) {
  response.status(404).json({
    notFound: true,
  });
}

function Location(city, geoData) {
  this.search_query = city; // "cedar rapids"
  this.formatted_query = geoData[0].display_name; // "Cedar Rapids, Iowa"
  this.latitude = parseFloat(geoData[0].lat);
  this.longitude = parseFloat(geoData[0].lon);
}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));



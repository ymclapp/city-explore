'use strict';

// Load Environment Variables from the .env file.
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

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
  // const geoData = require('./data/geo.json');
  const city = request.query.city;
  // const location = new Location(city, geoData);
  // response.send(location);
  const url = 'https://us1.locationiq.com/v1/search.php';
  superagent.get(url).query({
    key: process.env.GEOCODE_API_KEY,
    q: city,
    format: "json"
    }).then((locIQresponse)=>{
      let geoData = locIQresponse.body;
      const location = new Location(city, geoData);
      response.send(location);
    }).catch((error)=>{
      throw `Something went wrong ${error}`;
    });
  
}

function weatherHandler(request,response) {
  // const weatherData = require('./data/darksky.json');
  const city = request.query.city;
  const url = 'https://api.weatherbit.io/v2.0/current';
  superagent.get(url).query({
    key:  process.env.WEATHER_API_KEY,
    city: city
    callback: "json-p"
  }).then((weathResponse)=>{
    let weatherData = weathresponse.body;
    const weather = new Weather(city, geoData);
    response.send(weather);
  }).catch((error)=>{
    throw `Something went wrong ${error}`;
  });
}
  // const { latitude, longitude } = request.query;
  // const weather = [];
  // for (let i = 0; i < weatherData.daily.data.length; i++){
  //   weather.push(new Weather(weatherData.daily.data[i]));
  // }
const weather = weatherData.daily.data.map((dailyWeather)=>{
  return new Weather(dailyWeather);
});

  response.send(weather);
}




// function weatherHandler(request, response) {
//   const { latitude, longitude } = request.query;
//   weather(latitude, longitude)
//     .then(summaries => sendJson(summaries, response))
//     .catch((error) => errorHandler(error, request, response));
// }

// Has to happen after everything else
app.use(notFoundHandler);
// Has to happen after the error might have occurred
app.use(errorHandler); // Error Middleware


// Helper Functions

function errorHandler(error, request, response, next) {
  response.status(500).send('I think something went wrong.');

}

function notFoundHandler(request, response) {
  response.status(404).send('I could not find what you were asking for.')
}

function Location(city, geoData) {
  this.search_query = city; // "cedar rapids"
  this.formatted_query = geoData[0].display_name; // "Cedar Rapids, Iowa"
  this.latitude = parseFloat(geoData[0].lat);
  this.longitude = parseFloat(geoData[0].lon);
}

function Weather(weatherData) {
  this.forecast = weatherData.summary;
  this.time = new Date(weatherData.time).toDateString();

}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));



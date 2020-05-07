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

app.get('/trails', trailsHandler);

// Route Handler
function locationHandler(request, response) {
  const city = request.query.city;
  const url = 'https://us1.locationiq.com/v1/search.php';
  superagent.get(url).query({
    key: process.env.GEOCODE_API_KEY,
    q: city,
    format: 'json'
  }).then((locIQresponse)=>{
    let geoData = locIQresponse.body;
    const location = new Location(city, geoData);
    console.log(location);
    response.send(location);
  }).catch((error)=>{
    errorHandler(error,request,response);
  });
}

function weatherHandler(request,response) {
  const lat = request.query.latitude;
  const lon =  request.query.longitude;
  const url = 'https://api.weatherbit.io/v2.0/forecast/daily';
  superagent.get(url).query({
    key:  process.env.WEATHER_API_KEY,
    lon: lon,
    lat: lat
  }).then((weathResponse)=>{
    let weatherData = weathResponse.body.data;
    let dailyResults = weatherData.map(dailyWeather=>{
      return new Weather(dailyWeather);
    });
    response.send(dailyResults);
  }).catch((error)=>{
    errorHandler(error,request,response);
  });
}

function trailsHandler(request,response) {
  console.log(request.query);
  let lat = parseFloat(request.query.latitude);
  let lon = parseFloat(request.query.longitude);
  const url = 'https://www.hikingproject.com/data/get-trails';
  superagent.get(url).query({
    key: process.env.TRAILS_API_KEY,
    lon: lon,
    lat: lat
  }).then((hikersResponse)=>{
    let trailsData = hikersResponse.body;
    let trailsArray = trailsData.trails.map(trail=>{
      return new Trails(trail);
    });
    response.send(trailsArray);
  }).catch((error)=>{
    errorHandler(error,request,response);
  });
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
    message: error.message
  });

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
  this.forecast = weatherData.weather.description;
  this.time = weatherData.valid_date;

}

function Trails(trailsData) {
  this.name = trailsData.name;
  this.location = trailsData.location;
  this.length = trailsData.length;
  this.stars = trailsData.stars;
  this.star_votes = trailsData.starVotes;
  this.summary = trailsData.summary;
  this.trail_url = trailsData.trailURL;
  this.condition_details = trailsData.conditionStatus;
  this.condition_date = new Date (trailsData.conditionDate).toDateString;
  this.condition_time = trailsData.conditionTime;
}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));



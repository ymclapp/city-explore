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




//require modules
const client = require('./util/db');
const locationHandler = require('./modules/locations');
const errorHandler = require('./modules/errors');
const notFoundHandler = require('./modules/errors');


// Add /location route
app.get('/location', locationHandler);
app.get('/weather', weatherHandler);
app.get('/trails', trailsHandler);
// app.get('/yelp',yelpHandler);
// app.get('/movies', moviesHelper);



// Route Handler

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

// function yelpHandler(request,response) {
//   console.log(request.query);
//   let lat = parseFloat(request.query.latitude);
//   let lon = parseFloat(request.query.longitude);
//   const url = 'https://api.yelp.com/v3/businesses/search';
//   superagent.get(url).query({
//     key: process.env.YELP_API_KEY,
//     lon: lon,
//     lat: lat
//   }).then((yelpSearchResponse)=>{
//     let yelpData = yelpSearchResponse.body;
//     let yelpArray = yelpData.trails.map(trail=>{
//       return new Yelp(trail);
//     });
//     response.send(yelpArray);
//   }).catch((error)=>{
//     errorHandler(error,request,response);
//   });
// }

// function moviesHelper(request, response) {
//   console.log(request.query);
//   let
//   let
//   const url =
// }


// Has to happen after everything else
app.use(notFoundHandler);
// Has to happen after the error might have occurred
app.use(errorHandler); // Error Middleware


function Weather(weatherData) {
  this.forecast = weatherData.weather.description;
  this.time = new Date (weatherData.valid_date).toDateString();

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

//Make sure the server is listening for requests
client.connect()
  .then (() => {
    console.log('PG Connected!');
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
  })
  .catch(err => {
    throw `PG error!: ${err.message}`;
  });


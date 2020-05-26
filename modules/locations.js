'use strict';

const superagent = require('superagent');
const client = require('../util/db');

function setLocationInCache(location) {
  const {search_query, formatted_query, latitude, longitude} = location;
  const SQL = `
      INSERT INTO locations (search_query, formatted_query, latitude, longitude)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
  const parameters = [search_query, formatted_query, latitude, longitude];
  return client.query(SQL, parameters)
    .then(result => {
      console.log('Cache Location', result);
    })
    .catch(err => {
      console.error('Failed to cache location',err);
    })
}

function getLocationFromCache (city) {
  const SQL = `
      SELECT *
      FROM locations 
      WHERE search_query = $1 
      LIMIT 1
    `;
  return client.query(SQL, [city]);
}

function getLocationFromAPI(city,request,response){
  const url = 'https://us1.locationiq.com/v1/search.php';
  superagent.get(url).query({
    key: process.env.GEOCODE_API_KEY,
    q: city,
    format: 'json'
  }).then((locIQresponse)=>{
    let geoData = locIQresponse.body;
    const location = new Location(city, geoData);
    setLocationInCache(location)
      .then(() => {
        // console.log('Location has been cached', location);
        response.send(location);
      });
  }).catch((error) => {
    errorHandler(error, request, response);
  });
}

function locationHandler(request, response) {
  const city = request.query.city;
  getLocationFromCache(city)
    .then(result => {
      let {rowCount, rows} = result;
      if (rowCount > 0) {
        response.send(rows[0]);
      } else{
        getLocationFromAPI(city, request, response);
      }
    });
}

function Location(city, geoData) {
  this.search_query = city; // "cedar rapids"
  this.formatted_query = geoData[0].display_name; // "Cedar Rapids, Iowa"
  this.latitude = parseFloat(geoData[0].lat);
  this.longitude = parseFloat(geoData[0].lon);
}

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

module.exports = locationHandler;


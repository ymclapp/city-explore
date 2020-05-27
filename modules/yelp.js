'use strict';

const superagent = require('superagent');
const client = require('../util/db');

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

// function 


module.exports = yelpHandler;

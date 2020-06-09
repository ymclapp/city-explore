'use strict';

const superagent = require('superagent');
const client = require('../util/db');

function yelpHandler(city) {
  console.log(request.query.city);
  const url = 'https://api.yelp.com/v3/businesses/search';
  superagent.get(url).query({
    key: process.env.YELP_API_KEY,
    location: city
  })
    .then((yelpSearchResponse)=>{
      let yelpData = yelpSearchResponse.body;
      let yelpArray = yelpData.businesses.map(business=>{
        return new Yelp(business);
      });
      response.send(yelpArray);
    }).catch((error)=>{
      errorHandler(error,request,response, next);
    });
}

function Yelp(yelpData) {
  this.name = yelpData.name;
  this.image_url = yelpData.image_url;
  this.price = yelpData.price;
  this.rating = yelpData.rating;
  this.url = yelpData.url;
}

module.exports = yelpHandler;

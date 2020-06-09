'use strict';

const superagent = require('superagent');
const client = require('../util/db');

function moviesHandler(city) {
  console.log(request.query.city);
  const url = 'https://api.themoviedb.org/3/search/movie?';
superagent.get(url).query({
    api_key: process.env.MOVIE_API_KEY,
    language: en-US,
    page: 1,
    query: city
  })
    .then((moviesSearchResponse)=>{
      let moviesData = moviesSearchResponse.body;
      let moviesArray = moviesData.movies.map(business=>{
        return new Movies(movies);
      });
      response.send(moviesArray);
    }).catch((error)=>{
      errorHandler(error,request,response, next);
    });
}


function Movies(moviesData) {
  this.title = moviesData.title;
  this.overview = moviesData.overview;
  this.average_views = moviesData.average_views;
  this.total_votes = moviesData.total_votes;
  this.image_url = moviesData.image_url;
  this.popularity = moviesData.popularity;
  this.released_on = moviesData.released_on;
}

module.exports = moviesHandler;


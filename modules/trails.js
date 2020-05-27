'use strict';

const superagent = require('superagent');
const client = require('../util/db');

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

module.exports = trailsHandler;

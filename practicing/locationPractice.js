function locationPracticeHandler(request, response);
const geoData = require 
const location = new Location ('city', geoData);
response.send(location);



function Location(city, geoData) {
    this.search_query = city;
    this.formatted_query = goeData[0].display_name;
    this.latitude = parseFloat(geoData[0].lat);
    this.longitude = parseFloat(geoData[0].lon);
}
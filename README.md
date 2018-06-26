# liri-node-app

# Twitter NPM Info
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'lmwkdI7wD0lz1wrXbN16NBtbp',
  consumer_secret: 'jRU2g0rT7O64XYejeiAGI06JocSTpN1okmPslQf5EXds3VCfIW',
  access_token_key: '1011639869326716929-JMBMXVP6hmPsGicVNoxy4hmVQh6v8o',
  access_token_secret: 'qi2uLbuNysJASEaC60bDNJLceJ6TvySRCeY5UmxAGG1Yb'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

# OMDB Info
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    
   console.log("Release Year: " + JSON.parse(body).Year);
  }
});

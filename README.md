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
    
   console.log("Release Year: " + JSON.parse(body).Year);
  }
});
# Spotify Info
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 24969155ae5b4a2181b2e58ca56b7b42,
  secret: 64ba250ac4884c21b86e61d27ebcb469
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


#

function getCommand(){
    switch (cmd){
        case "my-tweets":
        // do stuff
        for (i = 0; i < tweets.length; i++) {
       console.log(JSON.stringify(tweets[i].text, null, 2));
    }
        break;
        case "spotify-this-song":
        // do stuff
        break;
    }
}

getCommand();




* Title of the movie. body.title
   * Year the movie came out. body.year
   * IMDB Rating of the movie. body.imdbRating
   * Rotten Tomatoes Rating of the movie. body.ratings[0].source
   * Country where the movie was produced. body.country
   * Language of the movie. body.language
   * Plot of the movie. body.plot
   * Actors in the movie. body.actors

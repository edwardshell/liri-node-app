require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api")

var cmd = process.argv[2];



var client = new Twitter(keys.twitter);


var params = {screen_nam: 'eddyshell1'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (error) {
        return console.log(error);
    }

    else if (cmd === "my-tweets") {
        console.log(JSON.stringify(tweets, null, 2));
    }
});

// var spotify = new Spotify(keys.spotify);


// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });
  
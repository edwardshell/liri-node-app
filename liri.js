require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");

// var spotifyID = new Spotify(keys.spotify.id);

// var spotifySecret = new Spotify(keys.spotify.secret);

var twitterKey = new Twitter(keys.twitter.consumer_key);


var twitterSecret = new Twitter(keys.twitter.consumer_secret);

var tokenKey = new Twitter(keys.twitter.access_token_key);

var tokenSecret = new Twitter(keys.twitter.access_token_secret);

var cmd = process.argv[2];



var client = new Twitter({
    consumer_key: twitterKey,
    consumer_secret: twitterSecret,
    access_token_key: tokenKey,
    access_token_secret: tokenSecret
});

var params = {screen_nam: 'eddyshell1'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (error) {
        return console.log(error);
    }

    else if (cmd === "my-tweets") {
        console.log(twitterKey);
        console.log(tweets);
        console.log(response);
    }
})
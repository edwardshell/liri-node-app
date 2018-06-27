require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");

// var spotify = new Spotify(keys.spotify);
var bird = new Twitter(keys.twitter);

var tKey = bird.consumer_key;
var tSecret = bird.consumer_secret;
var tokenKey = bird.access_token_key;
var tokenSecret = bird.access_token_secret
var cmd = process.argv[2];



var client = new Twitter({
    consumer_key: tKey,
    consumer_secret: tSecret,
    access_token_key: tokenKey,
    access_token_secret: tokenSecret
});

var params = {screen_nam: 'eddyshell1'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (error) {
        return console.log(error);
    }

    else if (cmd === "my-tweets") {
        console.log(tweets);
    }
})
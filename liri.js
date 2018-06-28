require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var content = process.argv[3];

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var cmd = process.argv[2];

var params = { screen_nam: "eddyshell1" };
var queryUrl ="http://www.omdbapi.com/?t=" + content + "&y=&plot=short&apikey=trilogy";


// client.get("statuses/user_timeline", params, function(error, tweets, response) {
//   if (error) {
//     return console.log(error);
//   } else {
//     for (i = 0; i < tweets.length; i++) {
//       console.log(JSON.stringify(tweets[i].text, null, 2));
//     }
//   }
// });

// spotify.search({ type: "track", query: songName, limit: 1 }, function(
//   err,
//   data
// ) {
//   if (err) {
//     return console.log("Error occurred: " + err);
//   } else {
//     console.log(
//       JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)
//     );
//     console.log("'" + process.argv[3] + "'");
//     console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
//     console.log(
//       JSON.stringify(
//         data.tracks.items[0].album.artists[0].external_urls.spotify,
//         null,
//         2
//       )
//     );
//   }
// });

function getCommand() {
  switch (cmd) {
    case "my-tweets":
      // do stuff
      client.get("statuses/user_timeline", params, function(
        error,
        tweets,
        response
      ) {
        if (error) {
          return console.log(error);
        } else {
          for (i = 0; i < tweets.length; i++) {
            console.log(JSON.stringify(tweets[i].text, null, 2));
          }
        }
      });

      break;

    case "spotify-this-song":
      // do stuff
      spotify.search({ type: "track", query: content, limit: 1 }, function(
        err,
        data
      ) {
        if (err) {
          return console.log("Error occurred: " + err);
        } else {
          console.log(
            JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)
          );
          console.log("'" + process.argv[3] + "'");
          console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
          console.log(
            JSON.stringify(
              data.tracks.items[0].album.artists[0].external_urls.spotify,
              null,
              2
            )
          );
        }
      });

      break;

    case "move-this":
     
      console.log(queryUrl);

      request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {
          console.log("Release Year: " + JSON.parse(body).Title);
          console.log("Release Year: " + JSON.parse(body).Year);
          console.log("Release Year: " + JSON.parse(body).imdbRating);
          console.log("Release Year: " + JSON.parse(body).Ratings[0].source);
          console.log("Release Year: " + JSON.parse(body).Country);
          console.log("Release Year: " + JSON.parse(body).Language);
          console.log("Release Year: " + JSON.parse(body).Plot);
          console.log("Release Year: " + JSON.parse(body).Actors);
        }
      });
  }
}

getCommand();

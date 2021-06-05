var Twitter = require('twitter');
var fs = require("fs");
var request = require("request");


var client = new Twitter({
    consumer_key: 'zKkjzj5LmGHvCssAEXsFfm324',
    consumer_secret: 'tcLNU2tikltEcLNXljRRvfqXmGZjufjI5J3lrLrzd3zQx22l6y',
    access_token_key: '1399619139694563329-ag2qMDTiFHyGLDox2Hk2rcbf6SxP8Y',
    access_token_secret: 'eQ6HZ70J3gwEruVoGFLpy7NUSX911wYvHOFkPQMk9ZvLs'
  });

  
var stream = client.stream('statuses/filter', {track: 'In May, Delhi CM Arvind '});
stream.on('data', function(event) {
  console.log("Tweeted by ::::>>>" + event.user.name + " ::::>>> " +  "Tweet is :::>>>> " + event.text + " ::::>>>");
  fs.appendFile("tweettttt.txt", JSON.stringify(event));
});

stream.on('error', function(error) {
  throw error;
});
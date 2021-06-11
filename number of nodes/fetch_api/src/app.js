var FetchTweets = require('fetch-tweets'); // Include the module
var url = require('url');


// Specify Twitter keys (preferably in an external .gitignore'd file)


var apiKeys = {
    consumer_key: 'zKkjzj5LmGHvCssAEXsFfm324',
    consumer_secret: 'tcLNU2tikltEcLNXljRRvfqXmGZjufjI5J3lrLrzd3zQx22l6y',
  
};

var testurl = "https://twitter.com/thewalrus/status/1403055589593292800";

var q = url.parse(testurl, true);
 
pathname=q.path;
var pathArray = pathname.split('/');
console.log(pathArray[3]);
var tweetid=pathArray[3];

function isValidURL(str) {
   let regexp = /^https:\/\/twitter.com\/[A-Z]*[a-z]*[0-9]*\/status\/[0-9]*$/
   if (regexp.test(str)) {
       return true;
   } else {
       return false;
   }
}




// Create a new object and pass in keys and optional additional options (see below)
if(isValidURL(testurl)==true){
   var fetchTweets = new FetchTweets(apiKeys); 




 var options = {
    q: tweetid,
    lang: '',
    result_type: 'popular',
    count: 3,
  }
  
  fetchTweets.byTopic(options, function(results){
     console.log(JSON.stringify(results, undefined, 2)); // Do whatever with the results
  });
}
else{
   console.log("url not valid")
   return false;
}


  
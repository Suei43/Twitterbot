console.log("Running!")
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = {
    q: 'potato',
    count: 2
}

T.get('search/tweets',params, (err,data,response)=>{
    console.log(err)
    var tweets = data.statuses;
});
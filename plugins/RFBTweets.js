//RFBTweets.js
//A plugin for RFB.
'use strict';
var ntwitter = require('ntwitter');

function RFBTweet(bot, steamClass, settings) {
    this.bot = bot;
    this.Steam = steamClass;
    this.settings = settings;
    this.twit = new ntwitter(settings.twitter);
    if (this.twit) {
        console.log('Twitter ready to twit.');
        //console.log(this.bot);
    }
}
function sendTweet(bot,Steam,twit,message,source){
twit.verifyCredentials(function(err, data) {}).updateStatus(message.substring(7), function(err, data) {
        if (err){
            bot.sendMessage(source,'Failed to twit!',Steam.EChatEntryType.ChatMsg);
        }
	    else if (data.id_str){

	            bot.sendMessage(source,'Tweeted: https://twitter.com/RedditFursTweet/status/'+data.id_str,Steam.EChatEntryType.ChatMsg);
		}
    });
}
RFBTweet.prototype.processMessage = function(source, message, type, chatter) {
    var bot = this;
    if (message.match('!tweet') != null && message.match('!tweet').index == 0) {
        sendTweet(this.bot,this.Steam,this.twit,message,source);        
    }
};

module.exports = RFBTweet;

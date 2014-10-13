'use strict';
//The 'Counter'.
//Yup.
//By Nurbs!

function TheCounter (bot,steamClass,settings){
	this.bot = bot;
	this.Steam = steamClass;
	this.timeSince = new Date();
};
TheCounter.prototype.processMessage = function(source, message, type, chatter){
	if (message.toLowerCase().match("dragon\ dildos") || message.toLowerCase().match("dragon\ dildo"))
	{
		var newDate = new Date(); //Get the current datetime.
		this.bot.sendMessage(source,"Boop! It has been " + Math.round((newDate - this.timeSince) / 1000) + " seconds since the counter has been booped.",this.Steam.EChatEntryType.ChatMsg);
		this.timeSince = newDate; //Set the counter to the last time someone said "it"
	}
};
module.exports = TheCounter;
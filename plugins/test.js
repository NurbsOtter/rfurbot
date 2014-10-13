'use strict';
//This is a test plugin!
function TestCommand (bot,steamClass,settings){
	this.bot = bot;	
	this.Steam = steamClass;
};
TestCommand.prototype.processMessage = function(source,message,type,chatter){
		if (message == 'ping'){
			this.bot.sendMessage(source,'pong',this.Steam.EChatEntryType.ChatMsg);
		}
	};
module.exports = TestCommand;

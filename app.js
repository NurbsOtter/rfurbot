'use strict';
var Steam = require('steam');
var fs = require('fs');
var bot = new Steam.SteamClient();
var settings = {};
var plugins = [];
fs.readFile(__dirname + '/settings.json',function(err,data){
	if (err){
		console.log(err);
		return;
	}
	settings = JSON.parse(data);
	bot.logOn({
		accountName:settings.userName,
		password:settings.password
	});
	bot.on('loggedOn',function(){
		console.log('Whoa!');
		bot.setPersonaState(Steam.EPersonaState.Online);
		bot.joinChat('103582791432513498');
		//bot.joinChat('103582791434255908');
		var pluginFiles = fs.readdirSync(__dirname + '/plugins/');
		for (var i = 0; i < pluginFiles.length;i++){
			if (pluginFiles[i].match(/.+\.js/g)){
				var tempClass = require('./plugins/'+pluginFiles[i]);
				var tempObj = new tempClass(bot,Steam,settings); //Each command is passed a reference to the bot, and to the Steam class itself, to avoid requiring it in each.
				plugins.push(tempObj);
			}			
		};
		console.log('Loaded ' + plugins.length + ' plugins.');
	});
	bot.on('message',function(source,message,type,chatter){
		console.log(bot.users[chatter].playerName + ':' + message);
		for (var i = 0; i < plugins.length;i++){
			plugins[i].processMessage(source,message,type,chatter);
		}
	});
});


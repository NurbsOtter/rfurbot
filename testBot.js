'use strict';
var fs = require('fs');
var readline = require('readline');
var settings = {};
var plugins = [];
fs.readFile(__dirname + '/settings.json',function(err,data){
	if (err){
		console.log(err);
		return;
	}
	settings = JSON.parse(data);
	var rl = readline.createInterface({
		input:process.stdin,
		output:process.stdout
	});
	var pluginFiles = fs.readdirSync(__dirname + '/plugins/');
	for (var i = 0; i < pluginFiles.length;i++){
		if (pluginFiles[i].match(/.+\.js/g)){
			var tempClass = require('./plugins/'+pluginFiles[i]);
			var tempObj = new tempClass(bot,Steam,settings); //Each command is passed a reference to the bot, and to the Steam class itself, to avoid requiring it in each.
			plugins.push(tempObj);
		}			
	};
	console.log('Loaded ' + plugins.length + ' plugins.');
	rl.on('line',function(data){
		console.log('You typed: '+data);
	})
});
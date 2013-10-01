var Steam = require('steam');
var twitter = require('ntwitter')
var twit = new twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: '' //Your twitter API info goes here.
});

var timeSince = new Date(); //Set the counter to the last boop.
var bot = new Steam.SteamClient();
bot.logOn({
	accountName: 'leredditfursbot',
	password: ''//Your steam password goes here
});
bot.on('loggedOn', function() {
	console.log('Works!');
	bot.joinChat('103582791432513498'); //This is the ID for the RFurchat
	bot.setPersonaState(Steam.EPersonaState.Online);//This sets the bot's status, see the steam api docs.
	
});
//All functionality goes into these bot.on messages. They're async so you can take some time doing what needs doing, the bot will take other commands.
bot.on('message', function(source, message, type, chatter) {
  // respond to both chat room and private messages
  console.log('Received message: ' + message);
  if (message == 'ping') 
  {
    bot.sendMessage(source, 'pong', Steam.EChatEntryType.ChatMsg); // ChatMsg by default
  }
	if (message.match('!tweet') != null &&message.match('!tweet').index == 0)
	{
		console.log('Got tweet');
		twit.verifyCredentials(function (err, data) {
  }).updateStatus(message.substring(7), function (err, data) {
      console.log(data);
    }
  );
	}
	if (message.match('c/d') != null)
	{
		if (Math.random() > 0.5) //Doesn't include 1, so it's a tad negative...:P
		{
			bot.sendMessage(source,'Denied!',Steam.EChatEntryType.ChatMsg);
		}
		else
		{
			bot.sendMessage(source,'Confirmed!',Steam.EChatEntryType.ChatMsg);
		}
	}
	if (message.toLowerCase().match("dragon\ dildos"))
	{
		var newDate = new Date(); //Get the current datetime.
		bot.sendMessage(source,"Boop! It has been " + Math.round((newDate - timeSince) / 1000) + " seconds since the counter has been booped.",Steam.EChatEntryType.ChatMsg);
		timeSince = newDate; //Set the counter to the last time someone said "it"
	}
		if (message.match("?") !=null) // this is a better answering line, this is Devleons addition to the rfb.
	{
		if(Math.random() > 0  && < .33)
			{
				bot.sendMessage(source,'yes',Steam.EChatEntryType.ChatMsg);
			}
		if(Math.random() > .34 && < .66)
		{
			bot.sendMessage(source, 'no', Steam.EChatEntryType.ChatMsg);
		}
		else
		{
			bot.sendMessage(source,'maybe',Steam.EChatEntryType.ChatMsg);
		}
	}
	if(message == 'furry') //this counts the word furry 
		{
		var furry;
		var x;
		var furry = x;
		bot.sendMessage(source,'Furry has been said +'furry'+ times',Steam.EChatEntryType.ChatMsg);
		x++;
		}
	if(message == 'fuck') //this will count the word fuck
		{
		var fuck;
		var x;
		var fuck =x;
		bot.sendMessage(source.'Fuck has been said +'fuck'+ times',Steam.EChatEntryType.ChatMsg);
		x++;
		}
}); 

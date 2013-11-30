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
		//console.log('Got tweet');
		twit.verifyCredentials(function (err, data) {
  }).updateStatus(message.substring(7), function (err, data) {
      console.log(data);
    }
  );
	}	
	if (message.toLowerCase().match("dragon\ dildos"))
	{
		var newDate = new Date(); //Get the current datetime.
		bot.sendMessage(source,"Boop! It has been " + Math.round((newDate - timeSince) / 1000) + " seconds since the counter has been booped.",Steam.EChatEntryType.ChatMsg);
		timeSince = newDate; //Set the counter to the last time someone said "it"
	}
	if (message.match("y/n") !=null) // this is a better answering line, this is Devleons addition to the rfb.
	{
		var randNum = Math.random();
		if(randNum > 0  && randNum < .33)
		{
			bot.sendMessage(source,'yes',Steam.EChatEntryType.ChatMsg);
		}
		else if(randNum > .34 && randNum < .66)
		{
			bot.sendMessage(source, 'no', Steam.EChatEntryType.ChatMsg);
		}
		else
		{
			bot.sendMessage(source,'maybe',Steam.EChatEntryType.ChatMsg);
		}
	}
	if(message.match("wut") !=null) //just something fun i guess, dont test this; must be stumbled upon
	{
		bot.sendMessage(source,'U Wut Mate', Steam.EChatEntryType.ChatMsg);
	}
	if(message.match("!rules") !=null)//This is going to display the server rules...might be handy in some scenarios
	{
		bot.sendMessage(source,'Member Rules"\n"'+
			'"\t"1. - No being rude to others (harassment, chat with intentions to start a fight, spamming)"\n"'+
			'"\t"2. - NSFW links should be tagged and sent in moderation"\n"'+
			'"\t"3. - Serious roleplay is not allowed. Non-serious roleplay should be infrequent."\n"'+
			'"\t"4. - Redditfurs gaming groups should be inclusive, and not judge people based on skill.',Steam.EChatEntryType.ChatMsg);
	}
	if(message.match("!8") //requested thing that the people wanted
		{
			var ball= Math.floor((Math.random()*10)+1);
			
				if(ball = 1)
					{
					bot.sendMessage(source,"It is decidedly so",Steam.EChat.EntryType.ChatMsg);
					}
				else if(ball = 2)
					{
					bot.sendMessage(source,"Without a doubt",Steam.EChat.EntryType.ChatMsg);
					}
				else if(ball = 3)
					{
					bot.sendMessage(source,"As I see it, yes",Steam.EChat.EntryType.ChatMsg);
					}
				else if(ball = 4)
					{
					bot.sendMessage(source,"Better not tell you now",Steam.EChat.EntryType.ChatMsg);
					}
				else if(ball = 5)
					{
					bot.sendMessage(source,"What the hell have you done, you just broke me right in the code....why would you do something like this you monster",Steam.EChat.EntryType.ChatMsg);
					}
				else if(bal = 6)
					{
					bot.sendMessage(source,"Cannot predict now",Steam.EChat,EntryType.ChatMsg);
					}
				else if(ball = 7)
					{
					bot.sendMessage(source,"Ask again later",Steam.EChat.EntryType.ChatMsg);
					}
				else if(ball = 8)
					{
					bot.sendMessage(source,"Don't count on it",Steam.EChat.EntryType.ChatMsg);
					}
				else if(ball = 9)
					{
					bot.sendMessage(source,"My sources say no",Steam.EChat.EntryType.ChatMsg);
					}
				else
					{
					bot.sendMessage(source,"Outlook not so good",Steam.EChat.EntryType,ChatMsg);
					}
		}
}); 

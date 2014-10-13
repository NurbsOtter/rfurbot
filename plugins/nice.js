// Links to a stupid youtube video everytime someone says nice in chat.
//By Scotty!
function Nice (bot, steamClass, settings){
        this.bot = bot;
        this.steam = steamClass;
};
 
Nice.prototype.processMessage = function(source, message, type, chatter){
        if (message === "nice"){
                this.bot.sendMessage(source,"https://www.youtube.com/watch?v=jjtkMCLRf-M", this.steam.EChatEntryType.ChatMsg);
        }
};
module.exports = Nice;
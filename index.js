//add bot config file
const botconfig = require("./botconfig.json");
//add fortnite 
const Client = require("fortnite");
//add key 
const apikey = require("./api.json")
//create fort api key 
const fortnite = new Client(apikey.key);
//add discord package
const Discord = require("discord.js");
//create bot
const bot = new Discord.Client({disableEveryone: true});



//turn bot on
bot.on("ready" , async () => {
    
    bot.user.setActivity("Stat Tracker powered by Fortnite Tracker");
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

});


  



//command setup 
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = require("./fortBot.js");
    if(commandfile) commandfile.run(bot,message,args);    
});

//turn on bot
bot.login(botconfig.token);

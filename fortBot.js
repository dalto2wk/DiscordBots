//Brings in Fortnite module
const Client = require("fortnite");
//API key in json file for key security
const apikey = require("./api.json")
// Create instance of client with API key
const fortnite = new Client(apikey.key);
// Create Discord node
const Discord = require("discord.js");


//display api data 
//fortnite commands 
module.exports.run = async (bot, message, args) => {
    
    let username = args[0];
    let platform = args[1] || 'pc';
    
    if(!username) return message.reply("Please provide a username");

   
    let data = fortnite.user(username, platform).then(data => {
        console.log(data);
        let stats = data.stats;
        let lifetime = data.lifetime;
        console.log(lifetime);

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[6]['Matches Played'];
        let wins = lifetime[6]['Wins'];
        let winper = lifetime[6]['Win%'];
        let kills = lifetime[6]['Kills'];
        let kd = lifetime[6]['K/d Ratio'];

        let embed = new Discord.RichEmbed()
        .setTitle("Lifetime Fortnite Tracker Stats")
        .setAuthor(data.username)
        .setColor("#0000FF")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Win Percentage", winper, true)
        .addField("Kill/Death Ratio", kd, true);

        message.channel.send(embed);



    });
}


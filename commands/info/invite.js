const Discord = require("discord.js")
module.exports = {
  name: "invite",
  description:
    "Get link of bot invite ",
  usage: "invite bot",
  category: "info",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    
    embed.setTitle("<:blueflame:750631295045861376> INVITE ME", "BOT INVITE", "715187341928562708")
    embed.setDescription("[INVITE BOT](https://discord.com/oauth2/authorize?client_id=734289655310057493&scope=bot)");
   embed.setColor("BLUE");
    embed.setFooter("CREATED BY BUDDY");
    embed.setTimestamp();
    
    
    return message.channel.send(embed);
  //worked
  } 
  }
  

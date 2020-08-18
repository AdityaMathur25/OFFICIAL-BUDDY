const Discord = require("discord.js")
module.exports = {
  name: "invite",
  description:
    "Get link of bot invite ",
  usage: "invite bot",
  category: "info",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    embed.setTitle("BOT INVITE")
 embed.setDescription("[INVITE BOT](https://discord.com/oauth2/authorize?client_id=734289655310057493&scope=bot)");
  embed.setcolor("") 
    return message.channel.send(embed);
  //worked
  } 
  }
  

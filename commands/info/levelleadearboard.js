const Discord = require('discord.js');
const db = require('quick.db');

module.exports= {
  name:"lead",
  category:"info",
  aliases:["le"],
  run: async (bot, message, args) => { 
    
    let level = db.startsWith(`level_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < level.length; i++) {
        let user = bot.users.get(level[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${level[i].data}\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Level Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")
    .setFooter("LEADEARBOARD")
message.channel.send(embed)
    }
}
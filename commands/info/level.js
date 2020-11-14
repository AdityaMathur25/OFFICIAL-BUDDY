const db = require('quick.db')
const { discord, MessageAttachment } = require('discord.js')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { getInfo } = require("../../handlers/xp.js")
module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  usage: "level <user>",
  category: "info",
  aliases:["rank"],
  run: async (client, message, args) => {
    
var user = message.mentions.users.first() || message.author;
  if(user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;

    const {level, remxp, levelxp, every} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of the xp`)
const finallevel = level
var loadingMsg = await message.channel.send('Loading Rankcard..')
var ranking = level/ 10
    let finalRank = ranking
    let data = await canva.rankcard(
      {
       link: "https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg",
       name: user.username,
       discriminator: user.discriminator,
       level: finallevel,
       rank: finalRank,
       currentXP: remxp,
       fullXP: levelxp,
       avatar: user.displayAvatarURL({ format: "png"})
    })
    const attachment = new MessageAttachment(
     data,
      "welcome-image.png"
    );
message.channel.send(attachment);
return loadingMsg.delete();

// XP Function
}
  }



const db = require('quick.db')
const { discord, member } = require('discord.js')
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
var loadingMsg = await message.channel.send('Loading Rankcard..');
    let Every = await db.all()
    every = every.filter(i => i
   ranking = ranking.tosring();

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
       avatar: message.author.displayAvatarURL({ format: "png"})
    })
    const attachment = new discord.MessageAttachment(
     data,
      "welcome-image.png"
    );
message.channel.send(attachment);
return loadingMsg.delete();

// XP Function

function XP (message) {
  if (message.content.startsWith(`cf!`)) return;
  const randomNumber = Math.floor(Math.random() * 2) + 4;
  db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber);
  db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
  var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1;
  var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`);
  var xpNeeded = level * 500;
  if (xpNeeded < xp) {
    var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
    db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded);
    message.channel.send(`${message.author}, you have leveled up your campskills to level ${newLevel}!`)
  }
}
  }
}

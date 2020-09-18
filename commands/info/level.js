const db = require('quick.db')
const discord = require('discord.js')
const Canvacord = require('canvacord')
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

    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of the xp`)
const finallevel = level
var loadingMsg = await message.channel.send('Loading image...');
var rank = level;
    rank = rank.toString();
var finalRank = `#${rank}`;
    let image = await Canvacord.rank({
  username: user.username,
  discrim: user.discriminator,
  status: user.presence.status,
  currentXP: remxp.toString(),
  neededXP: levelxp.toString(),
  level: finallevel,
   rank: finalRank,
  avatarURL: user.displayAvatarURL({ dynamic: true, format: "png" }),
  color: 'Aqua',
  background: await Canvacord.blur('https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg')
});

message.channel.send(new discord.MessageAttachment(image, "rank.png"));
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

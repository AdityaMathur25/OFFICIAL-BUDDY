const db = require('quick.db')
const discord = require('discord.js')
const Canvacord = require('canvacord')
module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  usage: "level <user>",
  category: "info",
  run: async (client, message, args) => {
    
var user = message.mentions.users.first() || message.author;
var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1;
level = level.toString();
let xp = db.get(`guild_${message.guild.id}_xp_${user.id}`) || 0 + 1;
var xpNeeded = level * 500 + 500;
let every = db
  .all()
  .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
  .sort((a, b) => b.data - a.data);
var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${user.id}`) + 1;
var loadingMsg = await message.channel.send('Loading image...');
var finalRank = `#${rank}`;
rank = rank.toString();
let image = await Canvacord.rank({
  username: user.username,
  discrim: user.discriminator,
  status: user.presence.status,
  currentXP: xp.toString(),
  neededXP: xpNeeded.toString(),
  level,
  rank: finalRank,
  avatarURL: user.displayAvatarURL({ format: "png" }),
  color: 'white',
  background: 'https://i.imgur.com/qUlHTcn.jpg'
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

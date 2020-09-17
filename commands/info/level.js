const { MessageAttachment } = require("discord.js");
const db = require("quick.db")
const discord = require("discord.js")
module.exports = {
  name:"level",
  description:"know your level",
  category:"info",
  aliases:["lv"],
run: async (client, message, args) => {
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    match(args.join(" ").toLowerCase(), message.guild) ||
    message.author;

  var level = db.get(`guild_${message.guild.id}_level_${user.id}`)
    let xp = db.get('guild_${message.guild.id}_xp_${user.id}') || 0
    var xpNeeded = level * 500 + 500
    let every = db
    .all()
    .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
    .sort((a,b) => b.data - a.data)
    var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${user.id}`) + 1
    rank = rank.toString()
      let imagine = await client.canvas.rank({
        username: user.username,
        discrim: user.discriminator,
        status: user.presence.status,
        currentXP: xp.toString(),
        neededXP: xpNeeded.toString(),
        rank,
        level,
        avatarURL: user.displayAvatarURL({format: "png"}),
        color: "white"
    })
    
     const randomNumber = Math.floor(Math.random() + 10) + 15
    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.guild.id}`, randomNumber)
    var level = db.get('guild_${message.guild.id}_level_${message.author.id}') || 1
    var XP = db.get(`guild_${message.guild.id}_xp_${message.author.id}')
    var XPNeeded = level * 500
    if (XPNeeded < xp) {
        var newLevel = db.get('guild_${message
  
}
}


const discord = require("discord.js")
const   db = require('quick.db');

module.exports = {
  name: "setlogchannel",
  category: "moderation",
  aliases: ["logchannel"],
  description: "Set a custom log channel",
  run: async (client, message, args) => {
    let perms = message.member.hasPermission("MANAGE_CHANNELS")
    if(!perms) return message.channel.send("You need the manage channels oermission to use this command")
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("you need to specify the log channel")
    
    let logchannel = db.fetch(`logchannel_${message.guild.id}`)
    
    if(logchannel === channel.id) {
      return message.channel.send("you cant specify the same channel, this channel is already the log channel")
    }
    
    message.channel.send(`Logchannel has been set to ${channel}`)
    await db.set(`logchannel_${message.guild.id}`, channel.id)
    console.log("channelset")
    await channel.send("This is now my logchannel")
  }
}
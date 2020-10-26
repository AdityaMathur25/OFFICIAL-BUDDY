const db = require("quick.db")
const discord = require("discord.js")
module.exports = {
 name: "setgchannel",
  description: "set global chat channel!",
  category: "settings",
  usage: "setchannel <#mention>",
   authorPermission: ["MANAGE_CHANNEL"],
  run: async (client, message, args) => {
  let c = message.mentions.channels.first()
    if (!c){ 
  return message.channel.send("mention channel for global chat")
}
  db.set(`global_${message.guild.id}`, c)
    return message.channel.send(`Global chat channel is now ${c}!`)
  
  
  }}
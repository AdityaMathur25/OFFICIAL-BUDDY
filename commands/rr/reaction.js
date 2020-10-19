const db = require('quick.db')
const discord = require('discord.js')
const MessageEmbed = require('discord.js')
module.exports = {
  name: "setuprr",
  category: "reaction-role",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
  
    let ID = args.join(" ")
     let ch = message.mentions.channels.first();//mentioned channel
 if (!ID) return message.channel.send("You don't enter msg ID");
    let r = await message.channel.fetch(ID)
    r.react("👍");
    
  }}
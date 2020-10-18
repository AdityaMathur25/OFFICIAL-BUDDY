const db = require('quick.db')
const discord = require('discord.js')
const MessageEmbed = require('discord.js')
module.exports = {
  name: "setuprr",
  category: "reaction-role",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
  
      const member = message.guild.members.cache.get(args[0]);
   if(!member)
     return message.channel.send('provide user id')
  }}
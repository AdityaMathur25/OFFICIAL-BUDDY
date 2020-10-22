const db = require('quick.db')
const Discord = require('discord.js')
const MessageEmbed = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
  name: "setafk",
  description: "set ur profile  to afk mode",
  alises: ["afk"],
  category: "utility",
  run: async (client, message , args ) => {
      embed.setDescription(`**${message.author.tag}** now AFK.`)
      embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
      status.set(message.author.id, args.join(" ") || `AFK`);
    } else {
      
      embed.setDescription("You are no longer AFK.");
      db.delete(message.author.id);
    }
    
    message.channel.send(embed)
  }
    
    }
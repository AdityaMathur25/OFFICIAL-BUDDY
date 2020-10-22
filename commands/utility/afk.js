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
   let reason = args.join(' ') ? args.join(' ') : 'I am currently afk, I will reply as soon possible.';

    let afklist = client.afk.get(message.author.id);

    if (!afklist) {

        let construct = {

            id: message.author.id,

            reason: reason

        };

        client.afk.set(message.author.id, construct);

      
    }
    
    const embed = new MessageEmbed()
    embed.setDescription(`**${message.author.tag}** now AFK.`)
      embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
   return 
      
     
    
    message.channel.send(embed)
  }
    
    }
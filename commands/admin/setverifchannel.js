const Discord = require("discord.js")
const db = require("quick.db")
const MessageEmbed = require('discord.js')
module.exports = {
  name: "setverificationc",
  category: "Administration",
  usage: "verification <#channel>",
  description: "Set the verification channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`Vchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`verification Channel is seted as ${channel}`)
    let gb =  db.fetch(`Vchannel_${message.guild.id}`)//send success message
    let r = db.fetch()
  const gg = new MessageEmbed()
  .setTitle('SERVER VERIFICATION')
  .setDescription('IF U WANT ACCESS TO FULL SERVER REACT ✅')
  .setThumbnail(message.client.user.displayAvatarURL({dynamic: true}))
  .setColor('RED')
  .setTimestamp()
  .setFooter(message.guild.name)
  let bd = message.client.channels.cache.get(gb).send(gg)
  bd.react('✅')
  const rolefilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  const add = bd.createReactionCollector(rolefilter, {timer: 6000})  
   add.on('collect', g => {
     .roles.add()
   }) 
    }
}
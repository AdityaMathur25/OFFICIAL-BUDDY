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
  const gg = new MessageEmbed()
  .setTitle('SERVER VERIFICATION')
  .setDescription('IF U WANT ACCESS TO FULL SERVER REACT ✅')
  .setThumbnail(message.client.user.displayAvatarURL({dynamic: true}))
  .setColor('RED')
  .setTimestamp()
  .set
    }
}
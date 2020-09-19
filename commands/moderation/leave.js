const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setleave",
  category: "Administration",
  usage: "setleave <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`leachannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`leave Channel is seted as ${channel}`) //send success message
  }
}
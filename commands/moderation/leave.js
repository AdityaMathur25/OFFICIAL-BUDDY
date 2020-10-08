
    const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
     category: "settings",
  description: "Set the welcome channel",
  name: "setleave",
  run: (client, message, args) => {
  usage: "setleave <#channel>",
 
    
    
    
      return message.channel.send("Please Mention the channel first")
    //Now we gonna use quick.db
    db.set(`leechannel_${message.guild.id}`, channel.id) //set id in var
    if(!channel) { //if channel is not mentioned
    let channel = message.mentions.channels.first() //mentioned channel
    message.channel.send(`leave Channel is seted as ${channel}`) //send success message
    }
  }

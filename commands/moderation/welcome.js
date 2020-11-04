const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "settings",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    let enable = args.join("").includes("enable")//mentioned channel
  if(enable === enable.includes("disable")) {
    }
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first ")
    }
    
    //Now we gonna use quick.db
   if(!enable){
      return message.channel.send("type enable if u want to enable image else type disable")
      }
    
    db.set(`welchannel_${message.guild.id}`, channel.id + enable) //set id in var
    
    message.channel.send(`Welcome Channel is seted as ${channel}`) //send success message
  }
}
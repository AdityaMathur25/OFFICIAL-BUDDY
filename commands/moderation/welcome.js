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
 let enable2  = args.join("").includes("disable") 
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first ")
    }
    
    //Now we gonna use quick.db
   if(!enable && !enable2){
      return message.channel.send("type enable if u want to enable image else type disable")
      }
    if(enable2 === true){
      enable === false
      }
    db.set(`welchannel_${message.guild.id}`, channel.id ) //set id in var
    db.set(`enabel_${message.guild.id}`, enable )
    message.channel.send(`Welcome Channel is seted as ${channel} , image is : ${enable}`) //send success message
  }
}
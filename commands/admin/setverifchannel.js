const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setverificantionchannel",
  category: "Administration",
  usage: "setverificationchannel <@channel>",
  description: "MAKE YOUR SERVER PROTECTED FORM RAIDERS",
  aliases:["setv"],
  run: (client, message, args) => {
    
    let channel = args.join(" ");//mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please provide channel")
    }
    
    //Now we gonna use quick.db
    
    db.set(`vchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`message seted as ${channel}`) //send success message
  }
}
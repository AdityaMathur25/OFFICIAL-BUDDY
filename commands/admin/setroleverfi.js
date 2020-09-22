const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setverificantionrole",
  category: "Administration",
  usage: "setverificationrole <@role>",
  description: "MAKE YOUR SERVER PROTECTED FORM RAIDERS",
  aliases:["setr"],
  run: (client, message, args) => {
    let role = message.mentions.members.first()
    let channel = args.join(" ");//mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please provide role")
    }
    
    //Now we gonna use quick.db
    
    db.set(`vchannel_${message.guild.id}`, channel.name) //set id in var
    
    message.channel.send(`message seted as ${channel}`) //send success message
  }
}
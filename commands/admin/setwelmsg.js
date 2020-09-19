const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelmessage",
  category: "Administration",
  usage: "setwelcomemessage <@message>",
  description: "Set the welcome message",
  alaises:["msg"],
  run: (client, message, args) => {
    
    let channel = message.content.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please provide message")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welmsg_${message.guild.id}`, message.content) //set id in var
    
    message.channel.send(`Welcome Channel is seted as ${channel}`) //send success message
  }
}
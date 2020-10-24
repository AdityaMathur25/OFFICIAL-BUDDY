const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelmessage",
  category: "settings",
  usage: "setwelcomemessage <@message>",
  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",
  aliases:["msg"],
  neededperms: "MANAGE_MESSAGES",
  run: (client, message, args) => {
    
    let Content = args.join(" ");//mentioned channel
    
    if(!Content) { //if channel is not mentioned
      return message.channel.send("Please provide message")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welmsg_${message.guild.id}`, Content) //set id in var
    
    message.channel.send(`message seted as ${Content}`) //send success message
  }
}
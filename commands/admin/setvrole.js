const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setvrole",
  category: "Administration",
  usage: "verification <@role>",
  description: "Set the verification role",
  run: (client, message, args) => {
    
    let role = message.mentions.roles.first() //mentioned channel
    
    if(!role) { //if channel is not mentioned
      return message.channel.send("Please Mention the role first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`Vrchannel_${message.guild.id}`, role.name) //set id in var
    
    message.channel.send(`verification role is seted as ${role}`) //send success message
  }
}
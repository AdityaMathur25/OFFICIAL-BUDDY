const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setantilink",

  category: "settings",

  usage: "setantilink <@message>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["anl"],

  run: (client, message, args) => {

    

    let dontt = message.mentions.channel.first//mentioned channel

    

   if(dontt > 5 ) {
     return message.channel.send(" please mention channels ")
     
     }
    if(!dontt) { //if channel is not mentioned

      return message.channel.send("Please say enable to enable anti link")

    }

    

    //Now we gonna use quick.db

    

    db.push(`anti_${message.guild.id}`, dontt.id) //set id in var
 db.push(`anti_${message.guild.id}`, dontt.id) //set id in var


    if(dontt < 5) return

    message.channel.send(`Anti-links  are now ${dontt}`) //send success message

  }

}
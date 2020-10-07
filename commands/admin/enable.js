const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setwimg",

  category: "Administration",

  usage: "setwelcomeimage <@enable>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["msg"],

  run: (client, message, args) => {

    

    let Content = message.content.includes("enable")//mentioned channel

    //NOO
//U DO VERIFY 
         if(!Content) { //if channel is not mentioned

      return message.channel.send("Please say enable to enable welcome image")

    }

    

    //Now we gonna use quick.db

    

    db.set(`enable_${message.guild.id}`, Content) //set id in var

    

    message.channel.send(`welcome image is now  ${Content}`) //send success message

  }

}
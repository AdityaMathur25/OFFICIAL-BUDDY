const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setwimg",

  category: "settings",

  usage: "setwelcomeimage <@enable>",

  description: "say enable to enable welcome image",

  aliases:["en"],

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
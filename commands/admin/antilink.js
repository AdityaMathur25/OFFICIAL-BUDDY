const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setantilink",

  category: "settings",

  usage: "setantilink <@message>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["anl"],

  run: (client, message, args) => {

    

    let dontent = message.content.includes("enable");//mentioned channel

    

    if(!dontent) { //if channel is not mentioned

      return message.channel.send("Please say enable to enable anti link")

    }

    

    //Now we gonna use quick.db

    

    db.set(`antili_${message.guild.id}`, dontent) //set id in var

    

    message.channel.send(`Anti-links  are now ${dontent}`) //send success message

  }

}
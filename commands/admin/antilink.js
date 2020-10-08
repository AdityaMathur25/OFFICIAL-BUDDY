const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setantilink",

  category: "settings",

  usage: "setantilink <@message>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["anl"],

  run: (client, message, args) => {

    

    let Content = args.join.includes("enable");//mentioned channel

    

    if(!Content) { //if channel is not mentioned

      return message.channel.send("Please say enable to enable anti link")

    }

    

    //Now we gonna use quick.db

    

    db.set(`antili_${message.guild.id}`, Content) //set id in var

    

    message.channel.send(`message seted as ${Content}`) //send success message

  }

}
const Discord = require("discord.js")

const db = require("quick.db")

module.exports = {

  name: "setantilink",

  category: "settings",

  usage: "setantilink <@message>",

  description: "Set the welcome message, use {user} to ping new user , {server} to show server name , {members} to show member count",

  aliases:["anl"],

  run: async (client, message, args) => {

    const  al = message.content.includes("enable")
    if(al===null) return
    message.channel.send("PLEASE SAY ENABLE TO ENABLE ANTI-LINKS :/")
 let g = await db.set(`${message.guild.id}`,`anti-link`)
if (al === al ) return
    message.channel.send(`Anti-links  are now turned on!`) //send success message

  }

}